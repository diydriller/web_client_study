import {Category} from "@/interfaces/Category";

export default {
  categories: <Category[]> [
    {
      title: 'backend',
      icon: '~assets/icon/backend.png',
      subCategories: [
        {
          subTitle: 'spring'
        },
        {
          subTitle: 'nodejs'
        }
      ]
    },
    {
      title: 'frontend',
      icon: '~assets/icon/backend.png',
      subCategories: [
        {
          subTitle: 'vue'
        }
      ]
    }
  ]
}


