import type { Track } from '../types/music';

interface ParousiaData {
  tracks: Track[];
}

export const parousiaData: ParousiaData = {
  tracks: [
    {
      id: '1',
      title: 'I. Apocalypsis (Revelation)',
      description: 'The veil of time parts, revealing glimpses of what is to come',
      duration: '12:34',
    },
    {
      id: '2',
      title: 'II. Thlipsis (Tribulation)',
      description: 'A tempest of trials and transformations',
      duration: '15:21',
    },
    {
      id: '3',
      title: 'III. Anastasis (Resurrection)',
      description: 'The dawn breaks through darkness',
      duration: '11:47',
    },
    {
      id: '4',
      title: 'IV. Basileia (Kingdom)',
      description: 'A new order emerges from chaos',
      duration: '14:53',
    },
    {
      id: '5',
      title: 'V. Doxa (Glory)',
      description: 'The final movement culminates in transcendent harmony',
      duration: '16:18',
    },
  ],
};