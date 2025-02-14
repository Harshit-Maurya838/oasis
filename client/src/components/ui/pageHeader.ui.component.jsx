import React from "react";
import Breadcrumbs from "../utils/breadcrums.utils.component";
import "../../styles/pages/categories.pages.styles.css";
import "../../styles/utils/animations.utils.styles.css";
import SplitText from "../animatedUtils/splitText.animatedUtils.component";
import Input from "../utils/input.utils.component";
import SearchIcon from '../icons/search.icon.component';

const PageHeader = ({
  classname,
  Title = "Category Title",
  PageDescription,
}) => {
  return (
    <section id="page_header" className={classname}>
      <h1 className="heading-03 spreadIn">{Title}</h1>
      <SplitText
        className="text-18-regular p"
        text={PageDescription}
        delay={8}
      ></SplitText>

      <Breadcrumbs className="fadein" />
      <div className="input">
        <Input
          type="text"
          placeholder={"Search by name or category..."}
          endComponent={
           <SearchIcon classname={"SearchIcon"}  width={20} height={20} fill={'black'}/>
          }
        />
      </div>
    </section>
  );
};

export default PageHeader;
