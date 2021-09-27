import React from "react";
import { CategoriesHeading, CategoriesList, CategoryItem, ItemLink, Container } from '../assets/styles'

const Categories = (props: any) => {
  const { categoriesList, handlerCategory, selectedCategory } = props

  return (
    <Container >
      <div >
        <CategoriesHeading >shop by category</CategoriesHeading>
      </div>
      <CategoriesList >
        {categoriesList.map((item: string, index: number) => {
          return (
            <CategoryItem key={`${item}_${index}`}>
              <ItemLink onClick={() => handlerCategory(item)} isActive={item === selectedCategory}>
                {item}
              </ItemLink>
            </CategoryItem>
          )
        })}

      </CategoriesList>
    </Container>
  );
};
export default Categories;
