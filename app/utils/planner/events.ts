import { Event } from "@/app/types/planner";

const dummyEvents: Event[] = [
  // ---------- FEB 3 ----------
  { id: "1", title: "Surgery", startTime: "11:00", endTime: "14:00", person: "Haico de Gast", room: "Behandelingkamer1", color: "orange", date: "2026-02-03", specialist: "Chirurg" },
  { id: "2", title: "Consult", startTime: "11:30", endTime: "13:00", person: "John Smith", room: "Management", color: "gold", date: "2026-02-03", specialist: "Consultant" },
  { id: "3", title: "Pijnspecialist", startTime: "12:00", endTime: "15:00", person: "Diane Lane", room: "Financien", color: "green", date: "2026-02-03", specialist: "Pijnspecialist" },
  { id: "4", title: "Cardiology", startTime: "13:00", endTime: "16:00", person: "Maria Garcia", room: "Management", color: "orange", date: "2026-02-03", specialist: "Cardioloog" },
  { id: "5", title: "Physio", startTime: "14:00", endTime: "17:00", person: "Peter Johnson", room: "Behandelingkamer1", color: "gold", date: "2026-02-03", specialist: "Fysiotherapeut" },
  { id: "6", title: "Neurology", startTime: "15:00", endTime: "18:00", person: "Sarah Williams", room: "Bijzonderheden-Verlof-Cursus", color: "gold", date: "2026-02-03", specialist: "Neuroloog" },

  // ---------- FEB 4 ----------
  { id: "7", title: "Surgery", startTime: "11:00", endTime: "13:30", person: "Haico de Gast", room: "Behandelingkamer1", color: "orange", date: "2026-02-04", specialist: "Chirurg" },
  { id: "8", title: "Pijnspecialist", startTime: "11:30", endTime: "14:30", person: "Diane Lane", room: "Financien", color: "green", date: "2026-02-04", specialist: "Pijnspecialist" },
  { id: "9", title: "Consult", startTime: "12:30", endTime: "15:30", person: "James Smith", room: "Management", color: "gold", date: "2026-02-04", specialist: "Consultant" },
  { id: "10", title: "Cardiology", startTime: "13:30", endTime: "16:30", person: "Maria Garcia", room: "Management", color: "orange", date: "2026-02-04", specialist: "Cardioloog" },
  { id: "11", title: "Physio", startTime: "14:30", endTime: "17:30", person: "Peter Johnson", room: "Behandelingkamer1", color: "gold", date: "2026-02-04", specialist: "Fysiotherapeut" },
  { id: "12", title: "General Check", startTime: "15:00", endTime: "18:00", person: "Emily Davis", room: "Bijzonderheden-Verlof-Cursus", color: "green", date: "2026-02-04", specialist: "Huisarts" },

  // ---------- FEB 5 ----------
  { id: "13", title: "Surgery", startTime: "11:00", endTime: "14:00", person: "Haico de Gast", room: "Behandelingkamer1", color: "orange", date: "2026-02-05", specialist: "Chirurg" },
  { id: "14", title: "Pijnspecialist", startTime: "11:30", endTime: "15:00", person: "Diane Lane", room: "Financien", color: "green", date: "2026-02-05", specialist: "Pijnspecialist" },
  { id: "15", title: "Consult", startTime: "12:00", endTime: "16:00", person: "John Smith", room: "Management", color: "gold", date: "2026-02-05", specialist: "Consultant" },
  { id: "16", title: "Ortho", startTime: "13:00", endTime: "17:00", person: "Robert Brown", room: "Management", color: "green", date: "2026-02-05", specialist: "Orthopeed" },
  { id: "17", title: "Physio", startTime: "14:00", endTime: "18:00", person: "Peter Johnson", room: "Behandelingkamer1", color: "gold", date: "2026-02-05", specialist: "Fysiotherapeut" },
  { id: "18", title: "Neurology", startTime: "15:00", endTime: "18:00", person: "Sarah Williams", room: "Bijzonderheden-Verlof-Cursus", color: "gold", date: "2026-02-05", specialist: "Neuroloog" },

  // ---------- FEB 6 ----------
  { id: "19", title: "Surgery", startTime: "11:00", endTime: "13:30", person: "Haico de Gast", room: "Behandelingkamer1", color: "orange", date: "2026-02-06", specialist: "Chirurg" },
  { id: "20", title: "Pijnspecialist", startTime: "11:30", endTime: "14:30", person: "Diane Lane", room: "Financien", color: "green", date: "2026-02-06", specialist: "Pijnspecialist" },
  { id: "21", title: "Consult", startTime: "12:30", endTime: "15:30", person: "James Smith", room: "Management", color: "gold", date: "2026-02-06", specialist: "Consultant" },
  { id: "22", title: "Cardiology", startTime: "13:30", endTime: "16:30", person: "Maria Garcia", room: "Management", color: "orange", date: "2026-02-06", specialist: "Cardioloog" },
  { id: "23", title: "Physio", startTime: "14:30", endTime: "17:30", person: "Peter Johnson", room: "Behandelingkamer1", color: "gold", date: "2026-02-06", specialist: "Fysiotherapeut" },
  { id: "24", title: "General Check", startTime: "15:00", endTime: "18:00", person: "Emily Davis", room: "Bijzonderheden-Verlof-Cursus", color: "green", date: "2026-02-06", specialist: "Huisarts" },

  // ---------- FEB 7 ----------
  { id: "25", title: "Surgery", startTime: "11:00", endTime: "14:00", person: "Haico de Gast", room: "Behandelingkamer1", color: "orange", date: "2026-02-07", specialist: "Chirurg" },
  { id: "26", title: "Pijnspecialist", startTime: "11:30", endTime: "15:00", person: "Diane Lane", room: "Financien", color: "green", date: "2026-02-07", specialist: "Pijnspecialist" },
  { id: "27", title: "Consult", startTime: "12:00", endTime: "16:00", person: "John Smith", room: "Management", color: "gold", date: "2026-02-07", specialist: "Consultant" },
  { id: "28", title: "Ortho", startTime: "13:00", endTime: "17:00", person: "Robert Brown", room: "Management", color: "green", date: "2026-02-07", specialist: "Orthopeed" },
  { id: "29", title: "Physio", startTime: "14:00", endTime: "18:00", person: "Peter Johnson", room: "Behandelingkamer1", color: "gold", date: "2026-02-07", specialist: "Fysiotherapeut" },
  { id: "30", title: "Neurology", startTime: "15:00", endTime: "18:00", person: "Sarah Williams", room: "Bijzonderheden-Verlof-Cursus", color: "orange", date: "2026-02-07", specialist: "Neuroloog" },

  // ---------- EXTRA LOAD (MORE CONGESTION) ----------
  { id: "31", title: "Walk-in", startTime: "11:00", endTime: "12:30", person: "Alex Moore", room: "Management", color: "green", date: "2026-02-03", specialist: "Huisarts" },
  { id: "32", title: "Emergency Consult", startTime: "12:00", endTime: "14:00", person: "Chris Adams", room: "Financien", color: "orange", date: "2026-02-04", specialist: "Consultant" },
  { id: "33", title: "Follow-up", startTime: "13:00", endTime: "15:00", person: "Laura White", room: "Management", color: "gold", date: "2026-02-05", specialist: "Huisarts" },
  { id: "34", title: "Injection Therapy", startTime: "14:00", endTime: "16:00", person: "Kevin Lee", room: "Behandelingkamer1", color: "gold", date: "2026-02-06", specialist: "Pijnspecialist" },
  { id: "35", title: "Rehab", startTime: "15:00", endTime: "18:00", person: "Nina Scott", room: "Financien", color: "green", date: "2026-02-07", specialist: "Fysiotherapeut" },
  { id: "36", title: "Consult", startTime: "11:30", endTime: "13:30", person: "Tom Harris", room: "Management", color: "orange", date: "2026-02-03", specialist: "Consultant" },
  { id: "37", title: "Cardiology Review", startTime: "12:30", endTime: "15:30", person: "Olivia King", room: "Financien", color: "gold", date: "2026-02-04", specialist: "Cardioloog" },
  { id: "38", title: "Minor Surgery", startTime: "13:30", endTime: "16:30", person: "Ryan Clark", room: "Behandelingkamer1", color: "orange", date: "2026-02-05", specialist: "Chirurg" },
  { id: "39", title: "Follow-up", startTime: "14:30", endTime: "17:30", person: "Sophia Turner", room: "Management", color: "green", date: "2026-02-06", specialist: "Huisarts" },
  { id: "40", title: "Late Consult", startTime: "15:00", endTime: "18:00", person: "Daniel Young", room: "Financien", color: "gold", date: "2026-02-07", specialist: "Consultant" },
];

export default dummyEvents;