import {SubCategory} from "@/interfaces/SubCategory";

export interface Category{
  title: string;
  icon: string;
  subCategories : SubCategory[];
}
