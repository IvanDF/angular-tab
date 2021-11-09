import { ITabList } from './ITabList';

export class TabList {
  tabList: ITabList[] = [
    {
      id: 1,
      info: {
        title: 'Titolo 1',
        subtitle: 'Sottotitolo 1',
        image:
          'https://pixabay.com/get/ge1961e4c059214efea86451b76e1cfdeca46943ceb33ce5ae94ce10fcf100a439c2bdf12649c127bf03f5764b8f0b716bf5a593e5d0bece5dc26785179d1d92f9245148373cb9d49c6f9daa73e4d2c91_1280.png',
        text: 'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus saepe temporibus minima molestias reprehenderit? Quas blanditiis possimus doloribus corrupti mollitia, error consectetur voluptate dignissimos nostrum, suscipit beatae incidunt rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus saepe temporibus minima molestias reprehenderit? Quas blanditiis possimus doloribus corrupti mollitia, error consectetur voluptate dignissimos nostrum, suscipit beatae incidunt rem.',
      },
      menu: {
        icon: 'https://static.thenounproject.com/png/423483-200.png',
        label: '1',
      },
    },
    {
      id: 2,
      info: {
        title: 'Titolo 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus saepe temporibus minima molestias reprehenderit? Quas blanditiis possimus doloribus corrupti mollitia, error consectetur voluptate dignissimos nostrum, suscipit beatae incidunt rem.',
      },
      menu: {
        icon: 'https://icons-for-free.com/iconfiles/png/512/suitcase+work+icon-1320165848716624003.png',
        label: '2',
      },
    },
    {
      id: 3,
      info: {
        title: 'Titolo 3',
        subtitle: 'Sottotitolo 3',
        image:
          'https://pixabay.com/get/g45b222e1f37a7767b7186c80e6ff25cb02e54cb28c41674eda5db2e334addebe697f3641532f1875d8b3a17023ef5ab4dcd9c4f9b593ac0d92c48d78d0c46f0d717546442b4ddfb4da83e97f91e13ece_1280.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus saepe temporibus minima molestias reprehenderit? Quas blanditiis possimus doloribus corrupti mollitia, Asperiores possimus saepe temporibus minima molestias reprehenderit? Quas blanditiis possimus doloribus corrupti mollitia, error consectetur voluptate dignissimos nostrum, suscipit beatae incidunt rem.',
      },
      menu: {
        icon: 'https://cdn.iconscout.com/icon/free/png-256/global-2031088-1714467.png',
        label: '3',
      },
    },
    {
      id: 4,
      info: {
        title: 'Titolo 4',
        image:
          'https://pixabay.com/get/ge76748314c55f0eefa36d4638b5f80fa2d1bec26689350654886de52bd8b9d0fe6b07a288e3f20a4d3fc89d9077de5d0cb5c3ccae195210cede0e07eeff1fb7300f5436e7cab176acb3d87e71277e67b_1280.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus saepe temporibus minima molestias reprehenderit? Quas blanditiis possimus doloribus corrupti mollitia, Asperiores possimus saepe temporibus minima molestias reprehenderit? Quas blanditiis possimus doloribus corrupti mollitia, error consectetur voluptate dignissimos nostrum, suscipit beatae incidunt rem.',
      },
      menu: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png',
        label: '4',
      },
    },
  ];
}
