import { renderBlock } from "./lib.js";
import { msg } from "./index.js"; 

 
export function renderSearchStubBlock() {
  renderBlock(
    "search-results-block",
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  );
}

export function renderEmptyOrErrorSearchBlock (reasonMessage:string) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

export function renderSearchResultsBlock(find:msg[]) {
  console.log(find);
  let HTMLCode:string=``

find.forEach(n=>{
 HTMLCode+= `<li class="result">
  <div class="result-container">
    <div class="result-img-container">
      <div class="favorites ${n.likes?"active":""}" data-number="${n.id}"></div>
      <img class="result-img" src="./img/result-1.png" alt="">
    </div>	
    <div class="result-info">
      <div class="result-info--header">
        <p>YARD Residence Apart-hotel</p>
        <p class="price">${n.price}&#8381;</p>
      </div>
      <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
      <div class="result-info--descr">Комфортный апарт-отель в самом сердце Санкт-Петербрга. К услугам гостей номера с видом на город и бесплатный Wi-Fi.</div>
      <div class="result-info--footer">
        <div>
          <button>Забронировать</button>
        </div>
      </div>
    </div>
  </div>
</li>`
})

 
  renderBlock(
    "search-results-block",
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
   ${HTMLCode}
  
    </ul>
    `
  );

}
