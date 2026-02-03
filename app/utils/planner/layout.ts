import { Event } from "@/app/types/planner";

export interface RenderPosition {
  left: string;
  width: string;
  top: string;
  height: string;
}

export interface RenderItem {
  type: "event" | "seemore";
  data?: Event; 
  events?: Event[]; 
  overflowCount?: number;
  id: string; 
  position: RenderPosition;
}

// Convert "HH:MM" to minutes from start of day (00:00)
const parseTime = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Check if two time ranges overlap
const doRangesOverlap = (
  start1: number,
  end1: number,
  start2: number,
  end2: number
): boolean => {
  return start1 < end2 && start2 < end1;
};

// Main Layout Function
export const calculateLayoutForRoom = (events: Event[]): RenderItem[] => {
  if (events.length === 0) return [];

  // Sort events by start time, then by duration (longest first)
  const sortedEvents = [...events].sort((a, b) => {
    const startA = parseTime(a.startTime);
    const startB = parseTime(b.startTime);
    if (startA !== startB) return startA - startB;
    
    const endA = parseTime(a.endTime);
    const endB = parseTime(b.endTime);
    return (endB - startB) - (endA - startA);
  });

  const clusters: Event[][] = [];
  let currentCluster: Event[] = [];
  let clusterEnd = -1;

  sortedEvents.forEach((event) => {
    const start = parseTime(event.startTime);
    const end = parseTime(event.endTime);

    if (currentCluster.length === 0) {
      currentCluster.push(event);
      clusterEnd = end;
    } else {
        
      if (start >= clusterEnd) {
        clusters.push(currentCluster);
        currentCluster = [event];
        clusterEnd = end;
      } else {
        currentCluster.push(event);
        clusterEnd = Math.max(clusterEnd, end);
      }
    }
  });
  if (currentCluster.length > 0) {
    clusters.push(currentCluster);
  }

  const resultItems: RenderItem[] = [];

  clusters.forEach((cluster) => {
    const clusterItems = processCluster(cluster);
    resultItems.push(...clusterItems);
  });

  return resultItems;
};

// Process a cluster of overlapping events to determine lane assignments
const processCluster = (cluster: Event[]): RenderItem[] => {
  
  const lanes: Event[][] = [[], [], []]; 
  
  cluster.forEach((event) => {
    const start = parseTime(event.startTime);
    const end = parseTime(event.endTime);

    if (!lanes[0].some(e => doRangesOverlap(parseTime(e.startTime), parseTime(e.endTime), start, end))) {
      lanes[0].push(event);
    }
    else if (!lanes[1].some(e => doRangesOverlap(parseTime(e.startTime), parseTime(e.endTime), start, end))) {
      lanes[1].push(event);
    }
    else {
      lanes[2].push(event);
    }
  });

  let colWidthPercent = 100;
  let hasOverflow = lanes[2].length > 0;
  let hasLane1 = lanes[1].length > 0;

  const items: RenderItem[] = [];

  // Create position for an event based on its lane and time
  const createPosition = (laneIndex: number, event: Event): RenderPosition => {
    const start = parseTime(event.startTime);
    const end = parseTime(event.endTime);
    const baseMinutes = 11 * 60;
    const topPx = (start - baseMinutes) * (120 / 30);
    const heightPx = (end - start) * (120 / 30);
    
    let widthStr = "100%";
    let leftStr = "0%";

    if (hasOverflow) {
        if (laneIndex === 0) {
            widthStr = "calc(50% - 20px)";
            leftStr = "0%";
        } else if (laneIndex === 1) {
            widthStr = "calc(50% - 20px)";
            leftStr = "calc(50% - 20px)";
        } else {
            widthStr = "38px";
            leftStr = "calc(100% - 38px)";
        }
    } else if (hasLane1) {
        widthStr = "50%";
        leftStr = laneIndex === 0 ? "0%" : "50%";
    }

    return {
      top: `${topPx}px`,
      height: `${heightPx}px`,
      left: leftStr,
      width: widthStr
    };
  };

  lanes[0].forEach(e => {
    items.push({
      type: "event",
      data: e,
      id: e.id,
      position: createPosition(0, e)
    });
  });

  lanes[1].forEach(e => {
    items.push({
      type: "event",
      data: e,
      id: e.id,
      position: createPosition(1, e)
    });
  });

  if (hasOverflow) {
    const sortedOverflow = lanes[2].sort((a,b) => parseTime(a.startTime) - parseTime(b.startTime));
    let currentGroup: Event[] = [];
    let groupEnd = -1;

    sortedOverflow.forEach(event => {
      const start = parseTime(event.startTime);
      const end = parseTime(event.endTime);
      
      if (currentGroup.length === 0) {
        currentGroup.push(event);
        groupEnd = end;
      } else {
        if (start < groupEnd) {
           currentGroup.push(event);
           groupEnd = Math.max(groupEnd, end);
        } else {
            items.push(createSeeMoreItem(currentGroup, cluster));
            currentGroup = [event];
            groupEnd = end;
        }
      }
    });
    if (currentGroup.length > 0) {
        items.push(createSeeMoreItem(currentGroup, cluster));
    }
  }

  return items;
};

// Create a "See More" item for overflow events
const createSeeMoreItem = (overflowEvents: Event[], allClusterEvents: Event[]): RenderItem => {
    let minStart = Infinity;
    overflowEvents.forEach(e => {
        const s = parseTime(e.startTime);
        minStart = Math.min(minStart, s);
    });

    const baseMinutes = 11 * 60;
    const topPx = (minStart - baseMinutes) * (120 / 30);
    const heightPx = 100; 

    return {
        type: 'seemore',
        events: allClusterEvents, 
        overflowCount: overflowEvents.length,
        id: `seemore-${overflowEvents[0].id}`,
        position: {
            top: `${topPx}px`,
            height: `${heightPx}px`,
            left: `calc(100% - 38px)`,
            width: `38px`
        }
    };
};

export default calculateLayoutForRoom;


