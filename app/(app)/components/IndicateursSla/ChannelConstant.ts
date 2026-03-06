export default interface ChannelConstantInterface {
  id: number;
  title: string;
  time: string;
  classname: string;
}

export const ChannelConstants : ChannelConstantInterface[] = [
    {
        id: 1,
        title: 'Téléphone',
        time: '9h – 18h',
        classname: 'bg-[#55B6E5] text-white',
    },
    {
        id: 2,
        title: 'Ticket support',
        time: '24/7',
        classname: 'bg-[#008ACD] text-white',
    },
    {
        id: 3,
        title: 'Email', 
        time: '24/7',
        classname: 'bg-[#198CC4] text-white',
    },
    {
        id: 4,
        title: 'Intervention sur site',
        time: 'selon SLA',
        classname: 'bg-[#00A3F2] text-white',
    },
];
