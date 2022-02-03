
import {Client} from '@notionhq/client'

const Test = () => {


const notion = new Client({ auth: "secret_F8qsQG0mOwHS7z5rZGaNQxZbOuL3Gw9Un5OHV2L9bpi" });
  const handleClick = () => {
    (async () => {
      const pageId = 'b55c9c91-384d-452b-81db-d1ef79372b75';
      const response = await notion.pages.retrieve({ page_id: pageId });
      console.log(response);
    })();
  }
  return ( <div>
    <button onClick={handleClick} >click</button>
  </div> );
}
 
export default Test;





