import ISectionObj from "../../../interfaces/ISectionObj";
import ICategoryObj from "../../../interfaces/ICategoryObj";

import filterByCategory from "../../../lib/filter/filterByCategory";
import filterBySection from "../../../lib/filter/filterBySection";
import {
  Checkbox,
  FilterOption,
  Title,
  Form,
  Button,
  Container,
} from "./FilterMenu.styled";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";

/**
 * @todo change structure of checkboxes
 * @see https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
 */
const FilterMenu: React.FC<{
  sections?: ISectionObj[];
  categories: ICategoryObj[];
  sectionFilters?: ISectionObj[];
  categoryFilters: ICategoryObj[];
  setSectionFilters?: undefined | ((arg: any) => void);
  setCategoryFilters: (arg: any) => void;
}> = ({
  sections,
  categories,
  sectionFilters,
  categoryFilters,
  setSectionFilters,
  setCategoryFilters,
}) => {
  function clearFilters() {
    if (setSectionFilters) setSectionFilters([]);
    setCategoryFilters([]);
  }

  const sectionHashtableRef = sections?.reduce(
    (dictionary: any, section, index) => {
      dictionary[index] = section.section;
      return dictionary;
    },
    {}
  );

  function createFilterHashtable() {
    const hashtable = JSON.parse(JSON.stringify(sectionHashtableRef));
    for (let key in hashtable) {
      hashtable[key] = [];
    }

    const hashtableRefEntries = Object.entries(sectionHashtableRef);

    categories.map((category) => {
      const { section } = category;

      // @ts-ignore
      const refIndex = hashtableRefEntries.find((entry) => {
        const sectionInEntry = entry[1];
        return sectionInEntry === section;
      })[0];

      hashtable[refIndex].push(category);
    });

    return hashtable;
  }

  const nestedFilteringOptions = sections
    ? Object.values(createFilterHashtable())
    : undefined;

  return (
    <Container>
      {nestedFilteringOptions ? (
        <Form>
          {nestedFilteringOptions.map((nestedCategories: any, index) => {
            const section = sectionHashtableRef[index];
            const sectionObj: ISectionObj = { section: section };
            const sectionInFilterState = sectionFilters?.find(
              (category) => category.section === section
            );

            return (
              <div key={index}>
                <FilterOption>
                  <input
                    type="checkbox"
                    name={section}
                    value={section}
                    //@ts-ignore
                    checked={sectionInFilterState || ""}
                    onChange={() =>
                      filterBySection(
                        sectionObj,
                        categories,
                        sectionFilters,
                        categoryFilters,
                        setSectionFilters,
                        setCategoryFilters
                      )
                    }
                  />
                  <Title>{section.toUpperCase()}</Title>
                </FilterOption>
                <div>
                  {nestedCategories.map(
                    (categoryObj: ICategoryObj, index: number) => {
                      const { category: categoryTitle } = categoryObj;
                      const categoryInFilterState = categoryFilters.find(
                        (category) =>
                          category.category === categoryObj.category &&
                          category.section === categoryObj.section
                      );

                      return (
                        <FilterOption isCategoryFilter={true} key={index}>
                          <input
                            type="checkbox"
                            name={categoryTitle}
                            value={categoryTitle}
                            //@ts-ignore
                            checked={categoryInFilterState || ""}
                            onChange={() =>
                              filterByCategory(
                                categoryObj,
                                sectionFilters,
                                categoryFilters,
                                setSectionFilters,
                                setCategoryFilters
                              )
                            }
                          />
                          <Title>{capitalizeFirstChar(categoryTitle)}</Title>
                        </FilterOption>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </Form>
      ) : (
        <Form>
          {categories.map((categoryObj: ICategoryObj, index: number) => {
            const { category } = categoryObj;
            const categoryInFilterState = categoryFilters.find(
              (item) =>
                item.category === categoryObj.category &&
                item.section === categoryObj.section
            );

            return (
              <FilterOption
                isCategoryFilter={true}
                onlyCategoryFilters={true}
                key={index}
              >
                <Checkbox
                  type="checkbox"
                  name={category}
                  value={category}
                  //@ts-ignore
                  checked={categoryInFilterState || ""}
                  onChange={() =>
                    filterByCategory(
                      categoryObj,
                      sectionFilters,
                      categoryFilters,
                      setSectionFilters,
                      setCategoryFilters
                    )
                  }
                />
                <Title>{capitalizeFirstChar(category)}</Title>
              </FilterOption>
            );
          })}
        </Form>
      )}
      <Button onClick={() => clearFilters()}>Clear Filters</Button>
    </Container>
  );
};

export default FilterMenu;
