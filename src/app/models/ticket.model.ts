type TicketTag = 'Frontend' | 'Backend';
export interface Ticket { 
    _id: string,
    name: string,
    priority: 'High' | 'Medium' | 'Low',
    type: 'Bug' | 'Feature',
    description: string,
    progress: 'To do' | 'In development' | 'Code review' | 'In test' | 'Done',
    tags: TicketTag[],
}