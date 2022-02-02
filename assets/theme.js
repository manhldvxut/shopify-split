!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicLightbox=e()}}((function(){return function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){var s="function"==typeof require&&require;if(!u&&s)return s(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[c]={exports:{}};n[c][0].call(l.exports,(function(e){return r(n[c][1][e]||e)}),l,l.exports,e,n,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i;t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,"IMG"),u=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===u&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(u)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&c()}));var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(u)}))},close:c};return u}},{}]},{},[1])(1)}));
!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();
class FacetFiltersForm extends HTMLElement {
  constructor() {
    super();
    this.filterData = [];
    this.onActiveFilterClick = this.onActiveFilterClick.bind(this);

    this.debouncedOnSubmit = debounce((event) => {
      this.onSubmitHandler(event);
    }, 500);

    this.querySelector('form').addEventListener('input', this.debouncedOnSubmit.bind(this));

    if ( ! this.classList.contains('don-t-duplicate') ) {

      document.getElementById('FacetFiltersFormMobile').innerHTML = document.getElementById('FacetFiltersForm').innerHTML;
      document.getElementById('FacetFiltersFormMobile').addEventListener('input', this.debouncedOnSubmit.bind(this));
      document.getElementById('FacetFiltersFormMobile').querySelectorAll('.facets__item').forEach(elm=>{
        const id = elm.querySelector('input').id;
        elm.querySelector('label').setAttribute('for', `mobile-${id}`);
        elm.querySelector('input').id = `mobile-${id}`;
      });
      document.getElementById('FacetFiltersFormMobile').querySelector('.active-facets').classList.remove('active-facets-desktop')
      document.getElementById('FacetFiltersFormMobile').querySelector('.active-facets').classList.add('active-facets-mobile');
    }

  }

  static setListeners() {
    const onHistoryChange = (event) => {
      const searchParams = event.state ? event.state.searchParams : FacetFiltersForm.searchParamsInitial;
      if (searchParams === FacetFiltersForm.searchParamsPrev) return;
      FacetFiltersForm.renderPage(searchParams, null, false);
    }
    window.addEventListener('popstate', onHistoryChange);
  }

  static toggleActiveFacets(disable = true) {
    document.querySelectorAll('.js-facet-remove').forEach((element) => {
      element.classList.toggle('disabled', disable);
    });
  }

  static renderPage(searchParams, event, updateURLHash = true) {
    FacetFiltersForm.searchParamsPrev = searchParams;
    const sections = FacetFiltersForm.getSections();
    document.getElementById('main-collection-product-grid').classList.add('loading');
    sections.forEach((section) => {
      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
      const filterDataUrl = element => element.url === url;
      FacetFiltersForm.filterData.some(filterDataUrl) ?
        FacetFiltersForm.renderSectionFromCache(filterDataUrl, event) :
        FacetFiltersForm.renderSectionFromFetch(url, event);
    });
    if (updateURLHash) FacetFiltersForm.updateURLHash(searchParams);
  }

  static renderSectionFromFetch(url, event) {
    fetch(url)
      .then(response => response.text())
      .then((responseText) => {
        const html = responseText;
        FacetFiltersForm.filterData = [...FacetFiltersForm.filterData, { html, url }];
        FacetFiltersForm.renderFilters(html, event);
        FacetFiltersForm.renderProductGrid(html);
        FacetFiltersForm.renderProductCount(html);
      });
  }

  static renderSectionFromCache(filterDataUrl, event) {
    const html = FacetFiltersForm.filterData.find(filterDataUrl).html;
    FacetFiltersForm.renderFilters(html, event);
    FacetFiltersForm.renderProductGrid(html);
    FacetFiltersForm.renderProductCount(html);
  }

  static renderProductGrid(html) {
    const innerHTML = new DOMParser()
      .parseFromString(html, 'text/html')
      .getElementById('CollectionProductGrid').innerHTML;
    document.getElementById('CollectionProductGrid').innerHTML = innerHTML;
    window.preloadImages(document.getElementById('CollectionProductGrid'));
  }

  static renderProductCount(html) {
    const countEl = new DOMParser().parseFromString(html, 'text/html').getElementById('CollectionProductCount');
    if ( countEl ) {
      document.getElementById('CollectionProductCount').innerHTML = countEl.innerHTML;
    }
  }

  static renderFilters(html, event) {
    const parsedHTML = new DOMParser().parseFromString(html, 'text/html');

    const facetDetailsElements =
      parsedHTML.querySelectorAll('#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter');
    const matchesIndex = (element) => {
      if ( event && event.target.closest('.js-filter') ) {
        return element.dataset.index === event.target.closest('.js-filter').dataset.index;
      }
    }
    const facetsToRender = Array.from(facetDetailsElements).filter(element => !matchesIndex(element));
    const countsToRender = Array.from(facetDetailsElements).find(matchesIndex);

    facetsToRender.forEach((element) => {
      document.querySelector(`.js-filter[data-index="${element.dataset.index}"]`).innerHTML = element.innerHTML;
    });

    FacetFiltersForm.renderActiveFacets(parsedHTML);

    if (countsToRender) FacetFiltersForm.renderCounts(countsToRender, event.target.closest('.js-filter'));
  }

  static renderActiveFacets(html) {
    const activeFacetElementSelectors = ['.active-facets-mobile', '.active-facets-desktop'];
    activeFacetElementSelectors.forEach((selector) => {
      const activeFacetsElement = html.querySelector('.active-facets');
      if (!activeFacetsElement) return;
      if ( document.querySelector(selector) )
        document.querySelector(selector).innerHTML = activeFacetsElement.innerHTML;
    })

    FacetFiltersForm.toggleActiveFacets(false);
  }

  static renderCounts(source, target) {
    const countElementSelectors = ['.facets__selected'];
    countElementSelectors.forEach((selector) => {
      const targetElement = target.querySelector(selector);
      const sourceElement = source.querySelector(selector);
      if (sourceElement && targetElement) {
        target.querySelector(selector).outerHTML = source.querySelector(selector).outerHTML;
      }
    });
  }


  static updateURLHash(searchParams) {
    history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
  }

  static getSections() {
    return [
      {
        id: 'main-collection-product-grid',
        section: document.getElementById('main-collection-product-grid').dataset.id,
      }
    ]
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target.closest('form'));
    const searchParams = new URLSearchParams(formData).toString();
    FacetFiltersForm.renderPage(searchParams, event);
  }

  onActiveFilterClick(event) {
    event.preventDefault();
    FacetFiltersForm.toggleActiveFacets();
    FacetFiltersForm.renderPage(new URL(event.currentTarget.href).searchParams.toString());
  }

}

FacetFiltersForm.filterData = [];
FacetFiltersForm.searchParamsInitial = window.location.search.slice(1);
FacetFiltersForm.searchParamsPrev = window.location.search.slice(1);
customElements.define('facet-filters-form', FacetFiltersForm);
FacetFiltersForm.setListeners();

class FacetRemove extends HTMLElement {
  constructor() {
    super();
    this.querySelector('a').addEventListener('click', (event) => {
      event.preventDefault();
      const form = this.closest('facet-filters-form') || document.querySelector('facet-filters-form');
      form.onActiveFilterClick(event);
    });
  }
}

customElements.define('facet-remove', FacetRemove);

class PriceRange extends HTMLElement {
  constructor() {
    super();
    this.querySelectorAll('input')
      .forEach(element => element.addEventListener('change', this.onRangeChange.bind(this)));

    this.setMinAndMaxValues();
  }

  onRangeChange(event) {
    this.adjustToValidValues(event.currentTarget);
    this.setMinAndMaxValues();
  }

  setMinAndMaxValues() {
    const inputs = this.querySelectorAll('input');
    const minInput = inputs[0];
    const maxInput = inputs[1];
    if (maxInput.value) minInput.setAttribute('max', maxInput.value);
    if (minInput.value) maxInput.setAttribute('min', minInput.value);
    if (minInput.value === '') maxInput.setAttribute('min', 0);
    if (maxInput.value === '') minInput.setAttribute('max', maxInput.getAttribute('max'));
  }

  adjustToValidValues(input) {
    const value = Number(input.value);
    const min = Number(input.getAttribute('min'));
    const max = Number(input.getAttribute('max'));

    if (value < min) input.value = min;
    if (value > max) input.value = max;
  }
}

customElements.define('price-range', PriceRange);
class LocalizationForm extends HTMLElement {

	constructor(){

		super();

		this.selector = this.querySelector('.regular-select-cover');
		this.content = this.querySelector('.regular-select-content');

		this.selector.addEventListener('click', e=>{

			e.stopPropagation();
			e.preventDefault();

			document.querySelectorAll('.regular-select-cover.content-opened').forEach(elm=>{
				if ( elm != e.currentTarget ) {
					elm.classList.remove('content-opened');
					elm.parentNode.style.zIndex = 9;
				}
			});

			if ( ! this.content.classList.contains('content-opened') ) {

				this.content.classList.add('content-opened');
				e.currentTarget.setAttribute('aria-expanded', 'true');
				this.content.parentNode.style.zIndex = 1000;;

				if ( this.content.classList.contains('invert-with-fixed') ) {
					if ( this.content.getBoundingClientRect().y + this.content.outerHeight + 55 > window.innerHeight ) {
						this.content.classList.add('invert');
					}
				} else {
					if ( this.content.offsetTop + this.content.outerHeight + 55 > document.querySelector('html').outerHeight ) {
						this.content.classList.add('invert');
					}
				}

				this.onClickHandler = (()=>{
					if ( this.content.classList.contains('content-opened') ) {
						this.content.classList.remove('content-opened', 'invert');
						this.content.parentNode.style.zIndex = 9;
					}
				}).bind(this);
				window.addEventListener('click', this.onClickHandler);

			} else {
				e.currentTarget.setAttribute('aria-expanded', 'false');
				this.content.parentNode.style.zIndex = 9;
				this.content.classList.remove('content-opened', 'invert');
				window.removeEventListener('click', this.onClickHandler);
			}

		});

		this.querySelector('.regular-select-cover').addEventListener('keydown', function(e){
			if ( e.keyCode == window.KEYCODES.RETURN ) {
				if ( ! this.content.classList.contains('opened-with-tab') ) {
					this.content.classList.add('opened-with-tab');
					this.content.querySelectorAll('.regular-select-item').forEach(elm=>{elm.setAttribute('tabindex', '0')});
				}
			}
		});

	}

}

customElements.define('localization-form', LocalizationForm);
class ModalBox extends HTMLElement {

	constructor() {

		super();

		this.o = {
			...{
				show: 10, 
				frequency: 'day', 
				enabled: true
			}, ...JSON.parse(this.dataset.options)
		};

		this._modalKey = `modal-${document.location.hostname}-${this.id}`;
		this._modalStorage = ! localStorage.getItem(this._modalKey) ? 'empty' : JSON.parse(localStorage.getItem(this._modalKey));
		this._modalText = this.extractText(this.querySelector('[data-content]'));

		if ( this.o.enabled ) {

			const timeNow = new Date().getTime();
			const inBetween = Math.round((timeNow - this._modalStorage['shown']) / 1000);
			let showModal = false;

			if ( this._modalStorage == 'empty'
				|| ( this.frequency == 'day' && inBetween > 86400 )
				|| ( this.frequency == 'week' && inBetween > 604800 )
				|| ( this.frequency == 'month' && inBetween > 2419200 )
				|| this._modalStorage['content'] != this._modalText
			 ) {
				showModal = true
			}

			if ( showModal ) {
				setTimeout(()=>{
					this.show();
				}, parseInt(this.o.show*1000));
				setTimeout(()=>{
					this.querySelectorAll('[data-close]').forEach(elm=>elm.addEventListener('click',()=>{this.hide(true)}));
				}, 100);
			}

		}
		
		this.setAttribute('style', '');

	}

	show(){
		window.preloadImages(this);
		this.classList.add('active');
	}
	hide(remember=false){
		this.classList.remove('active');
		if ( remember && ! Shopify.designMode ){
			localStorage.setItem(this._modalKey, JSON.stringify({
				'shown': (new Date().getTime()),
				'content': this._modalText
			}));
		}
	}

	extractText(content){
	  let span = document.createElement('span');
	  span.innerHTML= content.innerHTML;
	  const returnText = span.textContent || span.innerText;
	  span.remove();
	  return [returnText].toString().replace(/ +/g,'');
	}

}
customElements.define('modal-box', ModalBox);

// Shopify events

document.addEventListener('shopify:section:select', (e)=>{
	if ( e.target.classList.contains('mount-popup') ) {
		e.target.querySelector('modal-box').show();
	}
});
document.addEventListener('shopify:section:deselect', (e)=>{
	if ( e.target.classList.contains('mount-popup') ) {
		e.target.querySelector('modal-box').hide();
	}
});
class ProductVariants extends HTMLElement {

	constructor() {

		super();
		this.price = document.querySelector(`#product-price-${this.dataset.id}`);

		if ( this.price ) {
			this.priceOriginal = this.price.querySelector('.product__price--original');
			this.priceCompare = this.price.querySelector('.product__price--compare');
			this.priceUnit = this.price.querySelector('.product__price--unit');
		}

		this.productForm = document.querySelector(`#product-form-${this.dataset.id}`);
		if ( this.productForm ) {
			this.productQty = this.productForm.querySelector('.product__quantity');
			this.addToCart = this.productForm.querySelector('.product__add-to-cart');
			this.addToCartText = this.productForm.querySelector('.add-to-cart__text');
		}

		this.productSKU = document.querySelector(`#product-${this.dataset.id} .product__sku`);
		this.productBARCODE = document.querySelector(`#product-${this.dataset.id} .product__barcode`);

		this.addEventListener('change', this.onVariantChange);

		this.updateOptions();
		this.updateMasterId();
		this.updateUnavailableVariants();

		this.productStock = this.querySelector('.variant-quantity');
		if ( this.productStock && this.querySelector('.variant-quantity-data') ) {
			this.productStockData = JSON.parse(this.querySelector('.variant-quantity-data').dataset.inventory);
		}
		this.updateStock();

    this._event = new Event('VARIANT_CHANGE');

	}

	onVariantChange(){

    this.updateOptions();
    this.updateMasterId();
    this.updateVariantInput();
    if ( this.price ) {
    	this.updatePrice();
    }
    this.updateStock();
		this.updateUnavailableVariants();
		this.updatePickupAvailability();
    if ( ! this.hasAttribute('data-no-history') ) {
      this.updateURL();
    }
    this.updateDetails();

    if ( this.productForm ) {
	    if ( ! this.currentVariant || ! this.currentVariant.available ) {
        if ( this.productQty ) this.productQty.style.display = 'none';
	  		this.addToCart.classList.add('disabled');
        this.productForm.classList.add('disabled-cart');
	  		this.addToCartText.textContent = KROWN.settings.locales.products_sold_out_variant;
	    } else {
        if ( this.productQty ) this.productQty.style.display = '';
	  		this.addToCart.classList.remove('disabled');
        this.productForm.classList.remove('disabled-cart');
	  		this.addToCartText.textContent = KROWN.settings.locales.products_add_to_cart_button;
	    }
	    if ( ! this.currentVariant ) {
	    	this.productForm.classList.add('unavailable-variant');
	  		this.addToCartText.textContent = KROWN.settings.locales.products_unavailable_variant;
	    } else {
	    	this.productForm.classList.remove('unavailable-variant');
	    }
	  }

    this.dispatchEvent(this._event);

	}

	updateOptions(){
  	if ( this.dataset.type == 'select' ) {
    	this.options = Array.from(this.querySelectorAll('.product-variant-container'), (select) => select.value);
  	} else if ( this.dataset.type == 'radio' ) {
  		this.options = [];
  		this.querySelectorAll('.product-variant__input').forEach(elm=>{
  			if ( elm.checked ) 
  				this.options.push(elm.value);
  		});
  	}
	}

  updateMasterId(){
    this.currentVariant = this.getVariantData().find((variant) => {
      return !variant.options.map((option, index) => {
        return this.options[index] === option;
      }).includes(false);
    });
  }

  updatePrice(){
    
    if (!this.currentVariant) {
    	this.priceOriginal.innerHTML = '';
			this.priceCompare.style.display = 'none';
			this.priceUnit.innerHTML = '';
    } else {
			this.priceOriginal.innerHTML = KROWN.helpers.formatMoney(this.currentVariant.price, KROWN.settings.shop_money_format);
			if ( this.currentVariant.compare_at_price > this.currentVariant.price ) {
				this.priceCompare.innerHTML = KROWN.helpers.formatMoney(this.currentVariant.compare_at_price, KROWN.settings.shop_money_format);
				this.priceCompare.style.display = '';
			} else {
				this.priceCompare.style.display = 'none';
			}

			if ( this.currentVariant.unit_price_measurement ) {
				this.priceUnit.innerHTML = `
					${KROWN.helpers.formatMoney(this.currentVariant.unit_price, KROWN.settings.shop_money_format)} / 
					${( this.currentVariant.unit_price_measurement.reference_value != 1 ? this.currentVariant.unit_price_measurement.reference_value + ' ' : '' )}
					${this.currentVariant.unit_price_measurement.reference_unit}
				`;
			} else {
				this.priceUnit.innerHTML = '';
			}
    }
  
  }

  updateStock(){
    if (!this.currentVariant) {
    	if ( this.productStock )
  		this.productStock.innerHTML = '';
    } else {
			if ( this.productStock && this.productStockData ) {
	  		let currentVariant = false;
	  		for ( const variant of this.productStockData ) {
	  			if ( variant.id == this.currentVariant.id ) {
	  				currentVariant = variant;
	  				break;
	  			}
	  		}
	  		this.productStock.innerHTML = '';
	  		if ( currentVariant ) {
		  		if ( currentVariant.quantity <= 0 ) {
						if ( currentVariant.inventory == 'continue' ) {
							this.productStock.innerHTML = KROWN.settings.locales.products_preorder;
						} else if ( currentVariant.inventory == 'deny' ) {
							this.productStock.innerHTML = KROWN.settings.locales.products_no_products;
						}
					} else if ( currentVariant.quantity == '1' ) {
						this.productStock.innerHTML = KROWN.settings.locales.products_one_product;
					} else if ( currentVariant.quantity <= 5 ) {
						this.productStock.innerHTML = KROWN.settings.locales.products_few_products.replace('{{ count }}', currentVariant.quantity);
					} else if ( currentVariant.unavailable ) {
						this.productStock.innerHTML = KROWN.settings.locales.products_no_products;
					} else if ( currentVariant.quantity > 5 && this.productStock.dataset.type == "always" ) {
						this.productStock.innerHTML = KROWN.settings.locales.products_few_products.replace('{{ count }}', currentVariant.quantity);
					}
	  		}
	  	}
    }
  }

  updateDetails(){
  	if ( this.productSKU ) {
			if ( this.currentVariant.sku ) {
				this.productSKU.textContent = KROWN.settings.locales.product_sku + this.currentVariant.sku;
			} else {
				this.productSKU.textContent = '';
			}
  	}
  	if ( this.productBARCODE ) {
 			if ( this.currentVariant.barcode ) {
      	this.productBARCODE.textContent = KROWN.settings.locales.product_barcode + this.currentVariant.barcode;
      } else {
        this.productBARCODE.textContent = '';
      }
  	}
  }

  updatePickupAvailability() {
    const pickUpAvailability = document.querySelector('pickup-availability');
    if (!pickUpAvailability) return;

    if (this.currentVariant && this.currentVariant.available) {
      pickUpAvailability.fetchAvailability(this.currentVariant.id);
    } else {
      pickUpAvailability.removeAttribute('available');
      pickUpAvailability.innerHTML = '';
    }
  }

  updateUnavailableVariants(){

		if ( this.dataset.hideVariants == 'true' ) {

   		let options1 = {},
	        options2 = {},
	        options3 = {},

	        option1Selected = null,
	        option2Selected = null;

			if ( this.dataset.variants > 1 ) {
				option1Selected = this._getSelectedOption(0);
				this._resetDisabledOption(1);
      }
      if ( this.dataset.variants > 2 ) {
				option2Selected = this._getSelectedOption(1);
				this._resetDisabledOption(2);
      }

      this.getVariantData().forEach((el) => {

      	 if ( this.dataset.variants > 0 ) {
          if ( ! options1[el.option1] ) {
            options1[el.option1] = [];
          }
          options1[el.option1].push(String(el.available));
        }
        if ( this.dataset.variants > 1 ) {
          if ( ! options2[el.option2] ) {
            options2[el.option2] = [];
          }
          options2[el.option2].push(String(el.available));
        }
        if ( this.dataset.variants == 2 ) {
          if ( el.option1 == option1Selected && ! el.available ) {
          	this._setDisabledOption(1, el.option2);
          }
        }
        if ( this.dataset.variants > 2 ) {
          if ( ! options3[el.option3] ) {
            options3[el.option3] = [];
          }
          options3[el.option3].push(String(el.available));
          if ( el.option2 == option2Selected && el.option1 == option1Selected && ! el.available ) {
          	this._setDisabledOption(2, el.option3);
          }
        }

      });

      if ( this.dataset.variants > 0 ) {
        Object.keys(options1).forEach((key)=>{
          if ( ! options1[key].includes('true') ){
            this.querySelectorAll('.product-variant')[0].querySelector(`.product-variant-value[value="${key}"]`).setAttribute('disabled', 'disabled');
          }
        });
      }
      if ( this.dataset.variants > 1 ) {
        Object.keys(options2).forEach((key)=>{
          if ( ! options2[key].includes('true') ){
            this.querySelectorAll('.product-variant')[1].querySelector(`.product-variant-value[value="${key}"]`).setAttribute('disabled', 'disabled');
          }
        });
      }
      if ( this.dataset.variants > 2 ) {
        Object.keys(options3).forEach((key)=>{
          if ( ! options3[key].includes('true') ){
            this.querySelectorAll('.product-variant')[2].querySelector(`.product-variant-value[value="${key}"]`).setAttribute('disabled', 'disabled');
          }
        });
        Object.keys(options2).forEach((key)=>{
          if ( ! options2[key].includes('true') ){
            if ( option2Selected == key ) {
              this.querySelectorAll('.product-variant')[2].querySelector('.product-variant-value').setAttribute('disabled', 'disabled');
            }
          }
        });
      }

		}
  }

  _getSelectedOption(i){
  	if ( this.dataset.type == 'select' ) {
  		return this.querySelectorAll('.product-variant')[i].querySelector('.product-variant-container').value;
  	} else if ( this.dataset.type == 'radio' ) {
  		let selectedOption = null;
  		this.querySelectorAll('.product-variant')[i].querySelectorAll('.product-variant__input').forEach(elm=>{ if (elm.checked) selectedOption = elm.value });
  		return selectedOption;
  	}
  }

  _resetDisabledOption(i){
		this.querySelectorAll('.product-variant')[i].querySelectorAll('.product-variant-value').forEach((elm)=>{
			elm.removeAttribute('disabled');
		})
  }

  _setDisabledOption(i,option){
    this.querySelectorAll('.product-variant')[i].querySelector(`.product-variant-value[value="${option}"]`).setAttribute('disabled', 'disabled')
  }

  updateURL(){
    if (!this.currentVariant) return;
    window.history.replaceState({ }, '', `${this.dataset.url}?variant=${this.currentVariant.id}`);
  }

  updateVariantInput() {
    if (!this.currentVariant) return;
    const productForms = document.querySelectorAll(`#product-form-${this.dataset.id}, #product-form-installment`);
    productForms.forEach((productForm) => {
      const input = productForm.querySelector('input[name="id"]');
      input.value = this.currentVariant.id;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  getVariantData(){
    this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }

}

customElements.define('product-variants', ProductVariants);

/* ---
	Product Form
--- */

class ProductForm extends HTMLElement {
  constructor() {
    super();   
    this.init();
  }

  init(){
    if ( this.hasAttribute('data-ajax-cart') && ! document.body.classList.contains('template-cart') ) {
      this.form = this.querySelector('form');
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.ADD_TO_CART = new Event('add-to-cart');
    }
  }

  onSubmitHandler(e) {

    e.preventDefault();
    
    const submitButton = this.querySelector('[type="submit"]');

    submitButton.classList.add('working');

    const body = serializeForm(this.form);
    let alert = '';

    fetch(`${KROWN.settings.routes.cart_add_url}.js`, {
    	body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'POST'
    })
      .then(response => response.json())
      .then(response => {
    		if ( response.status == 422 ) {
    			// wrong stock logic alert
    			alert = document.createElement('span');
    			alert.className = 'alert body-text-sm alert--error';
    			alert.innerHTML = response.description
    			return fetch('?section_id=cart-helper');
    		} else {
    			return fetch('?section_id=cart-helper');
    		}
      })
      .then(response => response.text())
			.then(text => {

        const sectionInnerHTML = new DOMParser().parseFromString(text, 'text/html');
        const cartFormInnerHTML = sectionInnerHTML.getElementById('AjaxCartForm').innerHTML;
        const cartSubtotalInnerHTML = sectionInnerHTML.getElementById('AjaxCartSubtotal').innerHTML;

        const cartItems = document.getElementById('AjaxCartForm');
        cartItems.innerHTML = cartFormInnerHTML;
        cartItems.ajaxifyCartItems();

        if ( alert != '' ) {
    			document.getElementById('AjaxCartForm').querySelector('form').prepend(alert);
        }

        document.getElementById('AjaxCartSubtotal').innerHTML = cartSubtotalInnerHTML;
    		window.preloadImages(cartItems);

        document.querySelector('[data-header-cart-count]').textContent = document.querySelector('#AjaxCartForm [data-cart-count]').textContent;
        this.dispatchEvent(this.ADD_TO_CART);

      })
      .catch(e => {
      	console.log(e);
      })
      .finally(() => {
      	submitButton.classList.remove('working');
      });
  }
}

customElements.define('product-form', ProductForm);


/* ---
	Pickup availability
--- */

class PickupAvailability extends HTMLElement {

	constructor(){
		super();
    this.errorHtml = this.querySelector('template').content.firstElementChild.cloneNode(true);
    this.onClickRefreshList = this.onClickRefreshList.bind(this);
    if(!this.hasAttribute('available')) return;
    this.fetchAvailability(this.dataset.variantId);
	}

  fetchAvailability(variantId) {

    const variantSectionUrl = `${this.dataset.baseUrl}variants/${variantId}/?section_id=pickup-availability`;

    fetch(variantSectionUrl)
      .then(response => response.text())
      .then(text => {
        const sectionInnerHTML = new DOMParser()
          .parseFromString(text, 'text/html')
          .querySelector('.shopify-section');
        this.renderPreview(sectionInnerHTML);
      })
      .catch(e => {
      	console.log(e);
        if ( this.querySelector('button') ) {
          this.querySelector('button').removeEventListener('click', this.onClickRefreshList);
        }
        this.renderError();
      });

  }

  onClickRefreshList() {
    this.fetchAvailability(this.dataset.variantId);
  }

  renderError() {
    this.innerHTML = '';
    this.appendChild(this.errorHtml);
    this.querySelector('button').addEventListener('click', this.onClickRefreshList);
  }

  renderPreview(sectionInnerHTML){
  	
	  const drawer = document.getElementById('PickupAvailabilityDrawer');
	  if (drawer) drawer.remove();

	  if (!sectionInnerHTML.querySelector('pickup-availability-preview')) {
	    this.innerHTML = "";
	    this.removeAttribute('available');
	    return;
	  }

    this.innerHTML = sectionInnerHTML.querySelector('pickup-availability-preview').outerHTML;
    this.setAttribute('available', '');
    document.body.appendChild(sectionInnerHTML.querySelector('#PickupAvailabilityDrawer'));

    this.querySelector('button').addEventListener('click', (evt) => {
      document.getElementById('PickupAvailabilityDrawer').show(evt.target);
    });
    this.querySelector('button').addEventListener('keyup', e=>{
      if ( e.keyCode == window.KEYCODES.RETURN ) {
        document.getElementById('PickupAvailabilityDrawer').querySelector('[data-close]').focus();
      }
    })

	}

}
customElements.define('pickup-availability', PickupAvailability);

/* ---
	Product Image Zoom
--- */

class ProductImageZoom extends HTMLElement {

	constructor(){

		super();

		if ( ! document.getElementById('zoom') ) {
			this.zoom = document.createElement('div');
			this.zoom.id = 'zoom';
			this.zoom.innerHTML = `
				<img />
				<span class="zoom__exit">${KROWN.settings.symbols.zoom_out}</span>
				<div class="zoom__overlay"></div>
			`;
			document.body.append(this.zoom);
			this.zoom.querySelector('.zoom__exit').addEventListener('click', this._productZoomUnmount.bind(this));
		} else {
			this.zoom = document.getElementById('zoom');
		}

		this.onMouseMoveHandlerBinded = this.onMouseMoveHandler.bind(this);
		this.onResizeHandlerBinded = this.onResizeHandler.bind(this);

		this.addEventListener('click', (e)=>{
			this.zoom.classList.add('opened');
			this.image = this.zoom.querySelector('img');
			this.image.src = this.getAttribute('data-image');
			if ( this.image.naturalWidth > 0 ) {
				this._productZoomMount();
			} else {
				this.image.addEventListener('load', this._productZoomMount.bind(this));
			}
		});

	}

	onMouseMoveHandler(e){
		window.clientX = e.clientX;
		window.clientY = e.clientY;
		const x = e.clientX * ( window.innerWidth - this.image.offsetWidth ) / window.innerWidth;
		const y = e.clientY * ( window.innerHeight - this.image.offsetHeight ) / window.innerHeight;
		this.image.style.left = x + 'px';
		this.image.style.top = y + 'px';
	}

	onResizeHandler(){

		const rf = window.innerWidth > 768 ? 1 : 2;

		if ( this.image.classList.contains('portrait') ) {
			this.image.style.width = ( window.innerWidth*rf ) + 'px';
			this.image.style.height = ( window.innerWidth*rf / this.image.dataset.ratio ) + 'px';
		} else {

			this.image.style.height = ( window.innerHeight*rf ) + 'px';
			this.image.style.width = ( window.innerHeight*rf * this.image.dataset.ratio ) + 'px';

			if ( this.image.offsetWidth < window.innerWidth ) {
				this.image.style.width = ( window.innerWidth*rf ) + 'px';
				this.image.style.height = ( window.innerWidth*rf / this.image.dataset.ratio ) + 'px';
			}

		}

		const x = window.clientX * ( window.innerWidth - this.image.offsetWidth ) / window.innerWidth;
		const y = window.clientY * ( window.innerHeight - this.image.offsetHeight ) / window.innerHeight;

	}

	_productZoomMount(image) {

		this.image.style.left = 0;
		this.image.style.top = 0;

		window.addEventListener('mousemove', this.onMouseMoveHandlerBinded, {passive:true});

		this.image.dataset.ratio = this.image.naturalWidth / this.image.naturalHeight;
		window.addEventListener('resize', this.onResizeHandlerBinded, {passive:true});
		this.onResizeHandler();

		setTimeout(()=>{
			if ( document.body.classList.contains('touch') || document.body.classList.contains('touchevents') ) {
				this.zoom.scrollTop = ( window.innerHeight - this.image.offsetHeight ) / -2;
				this.zoom.scrollLeft = ( window.innerWidth - this.image.offsetWidth ) / -2;
			}
			this.zoom.classList.add('loaded');
		}, 50);

	}

	_productZoomUnmount() {

		this.zoom.classList.remove('opened');

		setTimeout(()=>{
			window.removeEventListener('resize', this.onResizeHandlerBinded);
			window.removeEventListener('mousemove', this.onMouseMoveHandlerBinded);
      const image = document.querySelector('#zoom img');
			image.src = '';
			image.className = '';
			image.style = '';
			this.zoom.classList.remove('loaded');
		}, 300);

	}

}

customElements.define('product-image-zoom', ProductImageZoom);
class SearchForm extends HTMLElement {

	constructor() {

		super();	
    this.cachedResults = {};
		this.input = this.querySelector('[data-search-input]');
    this.predictiveSearchResults = this.querySelector('[data-search-results]');
    this.results = [];
    this.preloader = false;

		if ( KROWN.settings.predictive_search_enabled != "false" ) {

			let inputValue = this.input.value;
			this.input.addEventListener('keyup', debounce(e=>{
				if ( this.input.value != inputValue ) {
					inputValue = this.input.value;
					this.getSearchResults(this.input.value.trim());
				} else if ( this.input.value == '' ) {
					this.clearSearchResults();
				}
			},150));

			this.input.addEventListener('keydown', e=>{
				if ( this.a11yIndex != -1 ) {
		    	if (
			      e.keyCode === window.KEYCODES.UP ||
			      e.keyCode === window.KEYCODES.DOWN ||
			      e.keyCode === window.KEYCODES.RETURN
			    ) {
			      e.preventDefault();
			    }
		    }
			});

			this.input.addEventListener('keyup', e=>{
				if (e.keyCode === window.KEYCODES.UP) {
	        this.navigateThrough('UP');
	        return true;
	      }

	      if (e.keyCode === window.KEYCODES.DOWN) {
	        this.navigateThrough('DOWN');
	        return true;
	      }

	      if (e.keyCode === window.KEYCODES.RETURN) {
	      	if ( this.a11yIndex != -1 ) {
	      		document.location.href = this.results[this.a11yIndex].querySelector('a');
	      	}
	      }
			})

		}

	}

	getSearchResults(query="") {

		this.preloadSearchResults();

    const queryKey = query.replace(" ", "-").toLowerCase();
    if (this.cachedResults[queryKey]) {
      this.renderSearchResults(this.cachedResults[queryKey]);
      return;
    }

	  this.a11yIndex = -1;

    fetch(`${KROWN.settings.routes.predictive_search_url}?q=${encodeURIComponent(query)}&resources[type]=${this.dataset.resourceType}&resources[limit]=4&section_id=predictive-search`)
    	.then(response=>{
        if (!response.ok) {
          var error = new Error(response.status);
          this.clearSearchResults();
          throw error;
        }
        return response.text();
    	})
    	.then(text=>{
    		const results = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
    		this.cachedResults[queryKey] = results;
    		this.renderSearchResults(results);
    	})	
      .catch((e) => {
        throw e;
    	}); 

	}

	clearSearchResults(){
		this.predictiveSearchResults.innerHTML = '';
		this.preloader = false;
    this.results = [];
	}

	preloadSearchResults(){
		if ( ! this.preloader ) {
			this.preloader = true;
			this.predictiveSearchResults.innerHTML = KROWN.settings.predictive_search_placeholder;
		}
	}

	renderSearchResults(results){
    this.predictiveSearchResults.innerHTML = results;
		this.preloader = false;
    this.results = this.predictiveSearchResults.querySelectorAll('.search-item, .sidebar__search-link');
		window.preloadImages(this.predictiveSearchResults);
	}

	navigateThrough(direction){

		if ( this.a11yIndex == -1 ) {
			this.a11yIndex = 0;
		} else {
			this.results[this.a11yIndex].classList.remove('active');
			if ( direction == 'UP' ) {
				if ( this.a11yIndex - 1 >= -1 ) {
					this.a11yIndex--;
				} 
			} else if ( direction == 'DOWN' ) {
				if ( this.a11yIndex + 1 < this.results.length ) {
					this.a11yIndex++;
				} 
			}
		}

		if ( this.a11yIndex >= 0 ) {
			this.results[this.a11yIndex].classList.add('active');
			document.getElementById('site-search-sidebar').scrollTop = this.results[this.a11yIndex].offsetTop - 200;
		} else {
			document.getElementById('site-search-sidebar').scrollTop = 0;
		}

	}

}
customElements.define('search-form', SearchForm);
class CSSSlider extends HTMLElement {

	constructor(){

		super();

    this._touchScreen = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
    const ua = navigator.userAgent.toLowerCase();
    this._ios15 = this._touchScreen && ua.includes('applewebkit') && ( ua.includes('os 15_') || ua.includes('version/15') );

		// create option object, from defaults
		this.o = {
			...{
				selector: '.css-slide', 
				snapping: true, 
        groupCells: false,
				autoHeight: false, 
				navigation: true,
				navigationDOM: `<span class="css-slider-button css-slider-prev" style="display:none">←</span>
					<span class="css-slider-button css-slider-next" style="display:none">→</span>`,
        thumbnails: true,
        thumbnailsDOM: `<div class="css-slider-dot-navigation" style="display:none"></div>`,
        indexNav: false,
        indexNavDOM: `<div class="css-slider-index-navigation"><span class="css-slider-current">1</span> / <span class="css-slider-total">1</span></div>`,
        watchCSS: false,
        undisplay: false,
        listenScroll: false
			}, ...JSON.parse(this.dataset.options)
		};

    // init slider or watch for css
    if ( ! this.o.watchCSS ) {
      this.initSlider();
    } else {
      this.RESIZE_WATCHER = debounce(()=>{
        const afterContent = window.getComputedStyle(this,':after').content;
        if ( afterContent.includes('css-slide') && !this.sliderEnabled ) {
          this.initSlider();
        } else if ( !afterContent.includes('css-slide') && this.sliderEnabled )  { 
          this.destroySlider();
        }
      }, 100);
      window.addEventListener('resize', this.RESIZE_WATCHER);
      this.RESIZE_WATCHER();
    }

	
	}

  destroySlider(){
    this.innerHTML = `${this.originalHTML}`;
    this.classList.remove('enabled');
    this.sliderEnabled = false;
    window.removeEventListener('resize', this.RESIZE_EVENT);
    window.removeEventListener('scroll', this.SCROLL_EVENT);
    window.removeEventListener('scroll', this.SCROLL_EVENT_ANIMATION);
    window.preloadImages(this);
  }

  initSlider(){

    // create custom events

    this._readyEvent = new CustomEvent('ready');
    this._changeEvent = new CustomEvent('change');
    this._scrollEvent = new CustomEvent('scroll');
    this._navEvent = new CustomEvent('navigation');
    this._pointerDownEvent = new CustomEvent('pointerDown');
    this._pointerUpEvent = new CustomEvent('pointerUp');

    // create slider structure

    this.classList.add('css-slider');
    this.originalHTML = this.innerHTML;
    this.innerHTML = `<div class="css-slider-viewport">
      <div class="css-slider-holder">
        <div class="css-slider-container">
          ${this.originalHTML}
        </div>
      </div>
    </div>`;

    window.preloadImages(this);
    
    // add css-slide to children, if it's not set

    if ( this.o.undisplay ) {
      this.querySelectorAll(`${this.o.selector}`).forEach((elm)=>{
        elm.style.display = 'block';
      })
    }

    if ( this.o.selector != '.css-slide' ) {
      this.querySelectorAll(`${this.o.selector}`).forEach((elm)=>{
        elm.classList.add('css-slide');
      })
    }

    // setup variables

    this.element = this.querySelector('.css-slider-holder');
    if ( this.o.groupCells ) {
      this.element.scrollLeft = 0;
    }

    this.items = this.querySelectorAll(`${this.o.selector}`);
    this.indexedItems = [];
    this.index = 0;
    this.length = this.items.length;
    this.windowWidth = window.innerWidth;
    
    this.viewport = this.querySelector('.css-slider-viewport');
    if ( this.o.autoHeight ) {
      this.viewport.classList.add('auto-height');
    }

    // append navigation

    if ( this.o.navigation || this.o.thumbnails || this.indexNav ) {

      let container = document.createElement('div');
      container.classList.add('css-slider-navigation-container');
      container.innerHTML = `
        ${(this.o.navigation ? this.o.navigationDOM : '')}
        ${(this.o.thumbnails ? this.o.thumbnailsDOM : '')}
        ${(this.o.indexNav ? this.o.indexNavDOM : '')}`;

      if ( this.o.navigation ) {
        this.prevEl = container.querySelector('.css-slider-prev');
        this.prevEl.addEventListener('click', e=>{
          this.changeSlide('prev');
          this.dispatchEvent(this._navEvent);
        });
        this.nextEl = container.querySelector('.css-slider-next');
        this.nextEl.addEventListener('click', e=>{
          this.changeSlide('next');
          this.dispatchEvent(this._navEvent);
        });
      }

      if ( this.o.thumbnails ) {
        this.thumbnailsEl = container.querySelector('.css-slider-dot-navigation'); 
      }

      if ( this.o.indexNav ) {
        this.indexEl = container.querySelector('.css-slider-current');
        this.lengthEl = container.querySelector('.css-slider-total'); 
      }

      this.append(container);

    }

    if ( this.length > 1 ) {

      // observer for slides

      this.RESIZE_EVENT = debounce(()=>{
        if ( this.windowWidth != window.innerWidth && this.o.groupCells) {
          this.resetSlider();
        }
        if ( ! this.o.groupCells ) {
          this.checkSlide();
        }
        this.windowWidth = window.innerWidth;
      }, 100);
      window.addEventListener('resize', this.RESIZE_EVENT);
      this.resetSlider(true);    

      // dispatching scroll event, mostly for extra animations
      if ( this.o.listenScroll ) {
        this.SCROLL_EVENT_ANIMATIONS = (()=>{
          let slidesWidth = -this.querySelector('.css-slider-container').offsetWidth;
          this.items.forEach(elm=>{slidesWidth += elm.offsetWidth});
          this.progress = this.element.scrollLeft / slidesWidth;
          this.dispatchEvent(this._scrollEvent);
        });
        this.element.addEventListener('scroll', this.SCROLL_EVENT_ANIMATIONS, {passive:true});
      }

      this.SCROLL_EVENT = debounce(()=>{
        // checking selected index
        if ( ! this._sliderBlockScroll ) {
          const scrollItems = this.indexedItems.entries();
          const scrollArray = Array.from(scrollItems, elm => Math.abs(elm[1].offsetLeft-this.element.scrollLeft));
          const scrollDistance = Math.min(...scrollArray);
          const scrollIndex = scrollArray.indexOf(scrollDistance);
          /*if ( this.indexedItems[this.length-2].offsetLeft-this.element.scrollLeft < 0 ) {
            this.index = this.length - 1;
            this.checkSlide();
            this.dispatchEvent(this._changeEvent);
          } else */if ( scrollIndex != this.index ) {
            this.index = scrollIndex;
            this.checkSlide();
            this.dispatchEvent(this._changeEvent);
          }

        }
      }, 10);

      // mouse fallback for non-touch devices

      this.element.addEventListener('scroll', this.SCROLL_EVENT, {passive:true});

      if ( ! this._touchScreen && ! this.element.classList.contains('css-slider--singular') ) {
        this.element.addEventListener('mousedown', e=>{
          if ( ! this.element.classList.contains('css-slider--disable-dragging') ) {
            this.mouseX = e.screenX;
            this.element.classList.add('can-drag');
            this.element.classList.add('mouse-down');
          }
        });
        this.element.addEventListener('mouseup', e=>{
          this.element.classList.remove('mouse-down');
          this.element.classList.remove('can-drag');
          this.element.classList.remove('pointer-events-off');
        });

        this.element.addEventListener('mouseleave', e=>{
          this.element.classList.remove('mouse-down');
          this.element.classList.remove('can-drag');
          this.element.classList.remove('pointer-events-off');
        });

        this.element.addEventListener('mousemove', e=>{
          if ( this.element.classList.contains('can-drag') ) {
            this.element.classList.add('pointer-events-off');
            let direction = this.mouseX - e.screenX;
            if ( Math.abs(direction) > 1 ) {
              if ( direction > 0 ) {
                this.changeSlide('next');
                this.element.classList.remove('can-drag');
              } else if ( direction < 0 ) {
                this.changeSlide('prev');
                this.element.classList.remove('can-drag');
              }
            }
          }
        });

      }

      // helper for browser that don't support smooth scrolling

      if ( ! ( "scrollBehavior" in document.documentElement.style ) && ! this._touchScreen ) {
        this.element.classList.add('force-disable-snapping');
      }

    }

    // dispatch ready event

    this.classList.add('enabled');
    this.sliderEnabled = true;
    this.dispatchEvent(this._readyEvent);

  }

	changeSlide(direction, behavior='smooth'){

    // function that changes the slide, either by word (next/prev) or index

		if ( direction == 'next' ) {
      if ( this.index+1 < this.length ) {
        this.index++;
      }
    } else if ( direction == 'prev') {
      if ( this.index-1 >= 0 ) {
        this.index--;
      }
    } else if ( parseInt(direction) >= 0 ) {
      this.index = parseInt(direction);
    }

    this._sliderBlockScroll = true;
    if ( this._ios15 ) {
      this.element.classList.add('force-disable-snapping');
    }
    setTimeout(()=>{
      this._sliderBlockScroll = false;
      if ( this._ios15 ) {
        this.element.classList.remove('force-disable-snapping');
      }
    }, 500);

    this.checkSlide();

    this.element.scrollTo({
      top: 0,
      left: this.indexedItems[this.index].offsetLeft - parseInt(getComputedStyle(this.indexedItems[0]).marginLeft),
      behavior: behavior
    });
    this.dispatchEvent(this._changeEvent);

	}

	checkSlide(){  
    
    // checks slide after index change and updates navigation / viewport

    if ( this.o.navigation ) {
      this.prevEl.classList.remove('disabled');
      this.nextEl.classList.remove('disabled');
      if ( this.index == 0 ) {
        this.prevEl.classList.add('disabled');
      }
      if ( this.index == this.length - 1 ) {
        this.nextEl.classList.add('disabled');
      }
    }

    if ( this.o.thumbnails && this.thumbnails ) {
      this.thumbnails.forEach(elm=>{elm.classList.remove('active')});
      this.thumbnails[this.index].classList.add('active');
    }

    if ( this.o.indexNav ) {
      this.indexEl.textContent = this.index+1;
    }
		
    if ( this.o.autoHeight ) {
      this.viewport.style.height = this.indexedItems[this.index].offsetHeight + 'px';
    } 
    
    this.indexedItems.forEach((elm,i)=>{
      if ( i == this.index ) {
        elm.classList.add('css-slide-active');
      } else {
        elm.classList.remove('css-slide-active');
      }
    });

	}

	afterAppend(){
		this.items = this.querySelectorAll(`${this.o.selector}`);
	}

	resetSlider(nojump=false,resetIndex=true){

		let slidesWidth = 0,
        slidesPerPage = 0,
        page = 0,
        pages = 0,
        totalWidth = this.querySelector('.css-slider-container').offsetWidth,// - 20,
        hideNavigation = false;

    // reset entire slider

    this.indexedItems = [];
    this.element.classList.add('disable-snapping');

    // find out how many pages (slides there are now)

    this.items.forEach((elm, i)=>{
      elm.classList.remove('css-slide--snap');
      slidesWidth += elm.offsetWidth;
      if ( slidesWidth > totalWidth && slidesPerPage == 0 ) {
        slidesPerPage = i;
      }
    });

    if ( slidesPerPage == 0 ) {
      slidesPerPage = this.items.length;
      hideNavigation = true;
    }
    // set each slide for observer

    this.items.forEach((elm, i) => {
      if ( i % slidesPerPage == 0  ) {
        elm.classList.add('css-slide--snap');
        elm.setAttribute('data-index', page++);
      }
    });

    this.indexedItems = this.querySelectorAll('.css-slide--snap');
    if ( resetIndex ) {
      this.index = 0;
    }
    this.length = Math.ceil(this.items.length / slidesPerPage);

    // recreate navigation

    if ( this.o.thumbnails ) {
      this.thumbnailsEl.innerHTML = '';
      for ( let i = 0; i < this.length; i++ ) {
        let dot = document.createElement('span');
        dot.classList.add('css-slider-dot');
        dot.dataset.index = i;
        this.thumbnailsEl.appendChild(dot);
        dot.addEventListener('click', (e)=>{
          this.changeSlide(e.target.dataset.index);
        });
      }
      this.thumbnails = this.thumbnailsEl.querySelectorAll('.css-slider-dot');
    }

    if ( this.o.indexNav ) {
      this.indexEl.textContent = this.index+1;
      this.lengthEl.textContent = this.length;
    }

    // hide navigation if only one slide

    if ( hideNavigation ) {
      this.element.classList.add('css-slider--no-drag');
      if ( this.o.navigation ) {
        this.prevEl.style.display = 'none';
        this.nextEl.style.display = 'none';
      }
      if ( this.o.thumbnails ) {
        this.thumbnailsEl.style.display = 'none';
      }
    } else {
      this.element.classList.remove('css-slider--no-drag');
      if ( this.o.navigation ) {
        this.prevEl.style.display = 'block';
        this.nextEl.style.display = 'block';
      }
      if ( this.o.thumbnails ) {
        this.thumbnailsEl.style.display = 'block';
      }
    }

    this.checkSlide();

    if ( ! nojump ) {
      this.element.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
    }
    this.element.classList.remove('disable-snapping');

	}

}
customElements.define('css-slider', CSSSlider);

document.addEventListener('shopify:section:load', (e)=>{
  if ( e.target.classList.contains('mount-css-slider') && e.target.querySelector('css-slider') ) {
    e.target.querySelectorAll('css-slider').forEach(slider=>{if(slider.enabled)slider.resetSlider()});
  }
});
class ToggleTab extends HTMLElement {

	constructor(){

		super();

		this.titleEl = this.querySelector('.toggle__title');
		this.contentEl = this.querySelector('.toggle__content');

		this.titleEl.innerHTML = `${this.titleEl.innerHTML}${KROWN.settings.symbols.toggle_pack}`;

		this.titleEl.addEventListener('click',this.onClickHandler.bind(this));
		this.titleEl.addEventListener('keydown', e=>{
			if ( e.keyCode == window.KEYCODES.RETURN ) {
				this.onClickHandler();
			}
		})

	}

	onClickHandler(){
		if ( ! this.titleEl.classList.contains('opened') ) {
			this.titleEl.classList.add('opened');
			this.titleEl.setAttribute('aria-expanded', 'true');
			this.slideDown(this.contentEl, 200);
		} else {
			this.titleEl.classList.remove('opened');
			this.titleEl.setAttribute('aria-expanded', 'false');
			this.slideUp(this.contentEl, 200);
		}
	}

	slideUp(target, duration){
		target.style.transitionProperty = 'height, margin, padding';
	  target.style.transitionDuration = duration + 'ms';
	  target.style.boxSizing = 'border-box';
	  target.style.height = target.offsetHeight + 'px';
	  target.offsetHeight;
	  target.style.overflow = 'hidden';
	  target.style.height = 0;
	  target.style.paddingTop = 0;
	  target.style.paddingBottom = 0;
	  target.style.marginTop = 0;
	  target.style.marginBottom = 0;
	  setTimeout(()=>{
	    target.style.display = 'none';
	    target.style.removeProperty('height');
	    target.style.removeProperty('padding-top');
	    target.style.removeProperty('padding-bottom');
	    target.style.removeProperty('margin-top');
	    target.style.removeProperty('margin-bottom');
	    target.style.removeProperty('overflow');
	    target.style.removeProperty('transition-duration');
	    target.style.removeProperty('transition-property');
	  }, duration);
	}
	slideDown(target, duration) {
		target.style.removeProperty('display');
	  var display = window.getComputedStyle(target).display;

	  if (display === 'none')
	    display = 'block';

	  target.style.display = display;
	  var height = target.offsetHeight;
	  target.style.overflow = 'hidden';
	  target.style.height = 0;
	  target.style.paddingTop = 0;
	  target.style.paddingBottom = 0;
	  target.style.marginTop = 0;
	  target.style.marginBottom = 0;
	  target.offsetHeight;
	  target.style.boxSizing = 'border-box';
	  target.style.transitionProperty = "height, margin, padding";
	  target.style.transitionDuration = duration + 'ms';
	  target.style.height = height + 'px';
	  target.style.removeProperty('padding-top');
	  target.style.removeProperty('padding-bottom');
	  target.style.removeProperty('margin-top');
	  target.style.removeProperty('margin-bottom');
	  setTimeout(()=>{
	    target.style.removeProperty('height');
	    target.style.removeProperty('overflow');
	    target.style.removeProperty('transition-duration');
	    target.style.removeProperty('transition-property');
	  }, duration);
	}

}
customElements.define('toggle-tab', ToggleTab);

document.addEventListener('shopify:block:select', e=>{
	const block = e.target;
	if ( block.classList.contains('toggle') ) {
		if ( !block.querySelector('.toggle__title').classList.contains('opened') ) {
			block.onClickHandler();
		}
	}
})
document.addEventListener('shopify:block:deselect', e=>{
	const block = e.target;
	if ( block.classList.contains('toggle') ) {
		if ( block.querySelector('.toggle__title').classList.contains('opened') ) {
			block.onClickHandler();
		}
	}
})
class VideoPopup extends HTMLElement {

	constructor(){
		super();
		this.querySelector('.video-popup__link').addEventListener('click',e=>{

			e.preventDefault();

			const blackout = document.createElement('div');
			blackout.classList.add('video-popup__blackout');
			this.append(blackout);
			setTimeout(()=>{
				blackout.style.opacity = '1';
			},10)

      this.classList.add('video-opened');

      if ( this.querySelector('.video-popup__close') ) {
        this.querySelector('.video-popup__close').addEventListener('click', e=>{
          this.querySelectorAll('iframe, video').forEach(elm=>{elm.remove()});
          this.querySelector('.video-popup__blackout').remove();
          this.classList.remove('video-opened');
        })
      }

			setTimeout(()=>{
        pauseAllMedia();
        this.querySelector('.video-popup__container').appendChild(this.querySelector('template').content.firstElementChild.cloneNode(true));
        setTimeout(()=>{
          playMedia(this.closest('[data-video]'));
        }, 500);
			},50);

		});

	}

}

customElements.define('video-popup', VideoPopup);

class VideoBackground extends HTMLElement {

  constructor(){

    super();

    const canSrc = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAA7RtZGF0AAACrAYF//+o3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE1MiByMTkgYmEyNDg5OSAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTcgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0zIGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MyBiX3B5cmFtaWQ9MiBiX2FkYXB0PTEgYl9iaWFzPTAgZGlyZWN0PTEgd2VpZ2h0Yj0xIG9wZW5fZ29wPTAgd2VpZ2h0cD0yIGtleWludD0yNTAga2V5aW50X21pbj0yNSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmNfbG9va2FoZWFkPTQwIHJjPWNyZiBtYnRyZWU9MSBjcmY9MjguMCBxY29tcD0wLjYwIHFwbWluPTAgcXBtYXg9NjkgcXBzdGVwPTQgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAACpliIQAJ//+8dzwKZrlxoFv6nFTjrH/8I5IvpuR7wM+8DluLAAQcGNdwkEAAAAKQZokbEJ/8yAHLAAAAAhBnkJ4jf8JeQAAAAgBnmF0Rf8KSAAAAAgBnmNqRf8KSQAAABBBmmhJqEFomUwIR//kQBXxAAAACUGehkURLG8JeQAAAAgBnqV0Rf8KSQAAAAgBnqdqRf8KSAAAAA9BmqxJqEFsmUwI/4cAU8AAAAAJQZ7KRRUsbwl5AAAACAGe6XRF/wpIAAAACAGe62pF/wpIAAAADkGa70moQWyZTAi/AAJPAAAACUGfDUUVLG8JeQAAAAgBny5qRf8KSQAAA8ptb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAACFwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAC9HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAACFwAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAoAAAAFoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAhcAAAMAAAEAAAAAAmxtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACzgAAAYAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAIXbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAB13N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAoABaAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAv/4QAYZ2QAC6zZQo35IQAAAwAMAAADAs4PFCmWAQAGaOviSyLAAAAAGHN0dHMAAAAAAAAAAQAAABAAAAGAAAAAFHN0c3MAAAAAAAAAAQAAAAEAAACIY3R0cwAAAAAAAAAPAAAAAQAAAwAAAAABAAAHgAAAAAEAAAMAAAAAAQAAAAAAAAABAAABgAAAAAEAAAeAAAAAAQAAAwAAAAABAAAAAAAAAAEAAAGAAAAAAQAAB4AAAAABAAADAAAAAAEAAAAAAAAAAQAAAYAAAAABAAAGAAAAAAIAAAGAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAAQAAAAAQAAAFRzdHN6AAAAAAAAAAAAAAAQAAAC3gAAAA4AAAAMAAAADAAAAAwAAAAUAAAADQAAAAwAAAAMAAAAEwAAAA0AAAAMAAAADAAAABIAAAANAAAADAAAABRzdGNvAAAAAAAAAAEAAAAwAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ny43Ny4xMDA=';
    let canVideoPlaying = false;
    let canVideo = document.createElement('video');
    canVideo.setAttribute('playsinline', 'playsinline');
    canVideo.setAttribute('muted', 'muted');
    canVideo.setAttribute('autoplay', 'autoplay');
    canVideo.setAttribute('loop', 'loop');
    canVideo.setAttribute('controls', 'controls');
    canVideo.setAttribute('width', 20);
    canVideo.setAttribute('height', 20);
    canVideo.onplay = ()=>{canVideoPlaying = true}
    canVideo.setAttribute('src', canSrc);
    canVideo.style.position = 'fixed';
    canVideo.style.top = '-20px';
    canVideo.style.left = '0px';
    canVideo.style.zIndex = '997';
    document.querySelector('body').appendChild(canVideo);

    let playPromise = canVideo.play();
    if ( playPromise !== undefined ) {
      playPromise.then(()=>{
        this.autoPlayCallback(true);
        canVideo.remove();
      })
      .catch((error)=>{
        if ( canVideoPlaying || error.toString().includes('interact with the document') ) {
          this.autoPlayCallback(true);
        } else {
          this.autoPlayCallback(false);
        }
        canVideo.remove();
      })
    }

  }

  autoPlayCallback(canAutoPlay){
    if ( canAutoPlay ) {
      const video = this.querySelector('.video-text__background');
      if ( video ) {
        video.innerHTML = `<video autoplay muted loop playsinline><source type="video/mp4" src="${video.dataset.src}"></video>`;
        video.querySelector('video').play();
        setTimeout(()=>{
          video.querySelector('video').style.opacity = '1';
        }, 200);
      }
    } else {
      this.querySelector('.video-text__background .video-text__image').style.display = 'block';
    }
  }

}

customElements.define('video-background', VideoBackground);
KROWN.helpers = {

  formatMoney: function(cents, format){

    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }

    let value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || moneyFormat;

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number === null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      const parts = number.split('.');
      const dollarsAmount = parts[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1' + thousands
      );
      const centsAmount = parts[1] ? decimal + parts[1] : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }

    return formatString.replace(placeholderRegex, value);

  }

}

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Returns pseudo content

const getPseudoContent = selector => {
	var element = document.querySelector(selector),
			pseudo = window.getComputedStyle(element, ':after');
	return pseudo.getPropertyValue('content');
}

const pauseAllMedia = () => {
  document.querySelectorAll('.product .js-youtube').forEach(video => {
    video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  });
  document.querySelectorAll('.product .js-vimeo').forEach(video => {
    video.contentWindow.postMessage('{"method":"pause"}', '*');
  });
  document.querySelectorAll('.product video').forEach(video => video.pause());
  document.querySelectorAll('.product product-model').forEach(model => {
    if ( model.modelViewerUI ) 
      model.modelViewerUI.pause()
  });
}

const playMedia = (media) => {
  switch ( media.dataset.productMediaType ) {
    case 'video':
      media.querySelector('video').play();
      break;
    case 'external_video-youtube':
      media.querySelector('.js-youtube').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      break;
    case 'external_video-vimeo':
      media.querySelector('.js-vimeo').contentWindow.postMessage('{"method":"play"}', '*');
      break;
  }
}

/*!
 * Serialize all form data into a SearchParams string
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */

const serializeForm = form => {
  let arr = [];
  Array.prototype.slice.call(form.elements).forEach(function(field) {
    if (
      !field.name ||
      field.disabled ||
      ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
    )
      return;
    if (field.type === 'select-multiple') {
      Array.prototype.slice.call(field.options).forEach(function(option) {
        if (!option.selected) return;
        arr.push(
          encodeURIComponent(field.name) +
            '=' +
            encodeURIComponent(option.value)
        );
      });
      return;
    }
    if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked)
      return;
    arr.push(
      encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
    );
  });
  return arr.join('&');
};

// get jsonp

const getJSONP = (url, success) => {

  var ud = '_' + +new Date,
      script = document.createElement('script'),
      head = document.getElementsByTagName('head')[0] 
             || document.documentElement;

  window[ud] = function(data) {
      head.removeChild(script);
      success && success(data);
  };

  script.src = url.replace('callback=?', 'callback=' + ud);
  head.appendChild(script);

}

const trueTypeOf = obj => {
  return Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();
}

const htmlEscape = input => {
  return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

const reframe = (target, cName) => {
  let frames = (typeof target === 'string') ? document.querySelectorAll(target) : target
  const c = cName || 'js-reframe'
  if (!('length' in frames)) frames = [frames]
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i]
    // makes sure reframe is not run more than 1x ✔️
    const hasClass = frame.className.split(' ').indexOf(c) !== -1

    if (hasClass || frame.style.width.indexOf('%') > -1) continue

    // get height width attributes
    const h = frame.getAttribute('height') || frame.offsetHeight
    const w = frame.getAttribute('width') || frame.offsetWidth

    // general targeted <element> sizes
    const padding = (h / w) * 100

    // created element <wrapper> of general reframed item
    // => set necessary styles of created element <wrapper>
    const div = document.createElement('div')
    div.className = c
    const divStyles = div.style
    divStyles.position = 'relative'
    divStyles.width = '100%'
    divStyles.paddingTop = `${padding}%`

    // set necessary styles of targeted <element>
    const frameStyle = frame.style
    frameStyle.position = 'absolute'
    frameStyle.width = '100%'
    frameStyle.height = '100%'
    frameStyle.left = '0'
    frameStyle.top = '0'

    // reframe targeted <element>
    frame.parentNode.insertBefore(div, frame)
    frame.parentNode.removeChild(frame)
    div.appendChild(frame)
  }
}

window.KEYCODES = {
  TAB: 9,
  ESC: 27,
  DOWN: 40,
  RIGHT: 39,
  UP: 38,
  LEFT: 37,
  RETURN: 13
};
const slideUp = (target, duration) => {
	target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  setTimeout(()=>{
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}
const slideDown = (target, duration) => {
	target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  setTimeout(()=>{
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}
/* 
	* This is the class for the theme's
		unique main header (navigation)
*/

class MainHeader extends HTMLElement {

	constructor(){
		super();
		this.mount();
	}

	mount(){

		/* -- > DRAWERS < -- */

		// drawer menu connections

		const sidebarMenu = document.getElementById('site-nav--mobile');

		if ( document.getElementById('site-menu-handle') ) {

			document.getElementById('site-menu-handle').addEventListener('click', e=>{
				e.preventDefault();
				document.getElementById('site-menu-handle').setAttribute('aria-expanded', 'true');
				sidebarMenu.show();
			})
			document.getElementById('site-menu-handle').addEventListener('keyup', e=>{
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					sidebarMenu.querySelector('.site-close-handle').focus();
				}
			})

		}

		// drawer cart connections

		const sidebarCart = document.getElementById('site-cart');

		if ( document.getElementById('site-cart-handle') ) {

			document.getElementById('site-cart-handle').addEventListener('click', e=>{
				e.preventDefault();
				document.getElementById('site-cart-handle').setAttribute('aria-expanded', 'true');
				sidebarCart.show();
			})
			document.getElementById('site-cart-handle').addEventListener('keyup', e=>{
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					sidebarCart.querySelector('.site-close-handle').focus();
				}
			})

		}

		// drawer search connections

		const sidebarSearch = document.getElementById('site-search');

		if ( document.getElementById('site-search-handle') ) {

			document.getElementById('site-search-handle').addEventListener('click', e=>{
				e.preventDefault();
				document.getElementById('site-search-handle').setAttribute('aria-expanded', 'true');
				sidebarSearch.show();
				setTimeout(()=>{
					sidebarSearch.querySelector('[data-search-input]').focus();
				}, 10);
			})

		}

		// closing drawers

		document.addEventListener('keydown', e=>{
			if ( e.keyCode == window.KEYCODES.ESC ) {
				document.querySelector('sidebar-drawer.active')?.hide();
			}
		});

		document.getElementById('site-overlay').addEventListener('click', ()=>{
			document.querySelector('sidebar-drawer.active')?.hide();
		});

		// resizing drawers

		this.RESIZE_SidebarHelper = debounce(()=>{
			if ( document.querySelector('sidebar-drawer.active') ) {
				document.querySelector('sidebar-drawer.active').style.height = `${window.innerHeight}px`;
			}
		}, 200);
		window.addEventListener('resize', this.RESIZE_SidebarHelper);
		this.RESIZE_SidebarHelper();

		if ( document.querySelector('.site-nav.style--classic > .site-nav-container') && document.querySelector('.site-nav.style--classic').offsetWidth - 110 <= document.querySelector('.site-nav.style--classic > .site-nav-container').offsetWidth ) {
			document.body.classList.add('switch-menus');
		} 

		// _end of drawers

		/* -- > SUBMENU HELPERS < -- */

		this.siteHeader = document.getElementById('site-header');

		if ( document.querySelector('.site-nav.style--classic') ) {
			const submenuPadding = ( this.siteHeader.offsetHeight - document.querySelector('.site-nav.style--classic').offsetHeight ) / 2;
			const submenuStyle = document.createElement('style');
			submenuStyle.id = 'site-nav-classic';
			submenuStyle.setAttribute('type', 'text/css');
			submenuStyle.innerHTML = `.site-nav.style--classic .submenu { padding-top: ${submenuPadding}px; } .site-nav.style--classic .submenu:after { top: ${submenuPadding}px; height: calc(100% - ${submenuPadding}px) !important; } .site-nav.style--classic .submenu.mega-menu { padding-top: ${submenuPadding+70}px; } .site-nav.style--classic .submenu.mega-menu:after { top: ${submenuPadding}px; }`;
			document.getElementsByTagName('head')[0].appendChild(submenuStyle);
		}

		// tab navigation for classic menu ___ TO WORK ON THIS !!!

		document.querySelectorAll('.site-nav.style--classic .has-submenu > a').forEach(childEl=>{

			const elm = childEl.parentNode;

			elm.addEventListener('keydown', e=>{
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					if ( ! e.target.classList.contains('no-focus-link') ) {
						e.preventDefault();
					}
					if ( ! elm.classList.contains('focus') ) {
						elm.classList.add('focus');
						elm.setAttribute('aria-expanded', 'true');
					} else if ( document.activeElement.parentNode.classList.contains('has-submenu') && elm.classList.contains('focus') ) {
						elm.classList.remove('focus');
						elm.setAttribute('aria-expanded', 'true');
					}
				}
			});	

			if ( elm.querySelector('.submenu-holder > li:last-child a') ) {
				elm.querySelector('.submenu-holder > li:last-child a').addEventListener('focusout', e=>{
					if ( elm.classList.contains('focus') ) {
						elm.classList.remove('focus');
						elm.setAttribute('aria-expanded', 'false');
					}
				});
			}

		});

		document.querySelectorAll('.site-nav.style--classic .has-babymenu:not(.mega-link) > a').forEach(childEl=>{	

			const elm = childEl.parentNode;

			elm.addEventListener('keydown', e=>{
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					e.preventDefault();
					if ( ! elm.classList.contains('focus') ) {
						elm.classList.add('focus');
						elm.setAttribute('aria-expanded', 'true');
					} else {
						elm.classList.remove('focus');
						elm.setAttribute('aria-expanded', 'false');
					}
				}
			});

			if ( elm.querySelector('.babymenu li:last-child a') ) {
				elm.querySelector('.babymenu li:last-child a').addEventListener('focusout', e=>{
					if ( elm.parentNode.classList.contains('focus') ) {
						elm.parentNode.classList.remove('focus');
						elm.parentNode.setAttribute('aria-expanded', 'false');
					}
				});
			}

		})

		// sidebar submenus opening

		document.querySelectorAll('.site-nav.style--sidebar .has-submenu:not(.collections-menu)').forEach(elm=>{
			elm.querySelector(':scope > a').addEventListener('click', e=>{
				const parent = e.currentTarget.parentNode;
				if ( ! parent.classList.contains('active') ) {
					e.preventDefault();
					parent.classList.add('active');
					slideDown(parent.querySelector('.submenu'), 200);
					parent.querySelector('.submenu').setAttribute('aria-expanded', 'true');
				} else if ( e.currentTarget.getAttribute('href') == '#' ) {
					e.preventDefault();
					parent.classList.remove('active');
					slideUp(parent.querySelector('.submenu'), 200);
					parent.querySelector('.submenu').setAttribute('aria-expanded', 'false');
					elm.classList.remove('hover');
				}
			});
		})

		document.querySelectorAll('.site-nav.style--sidebar .has-babymenu:not(.collections-menu)').forEach(elm=>{
			elm.querySelector(':scope > a').addEventListener('click', e=>{
				const parent = e.currentTarget.parentNode;
				if ( ! parent.classList.contains('active') ) {
					e.preventDefault();
					parent.classList.add('active');
					slideDown(parent.querySelector('.babymenu'), 200);
					parent.querySelector('.babymenu').setAttribute('aria-expanded', 'true');
				} else if ( e.currentTarget.getAttribute('href') == '#' ) {
					e.preventDefault();
					parent.classList.remove('active');
					slideUp(parent.querySelector('.babymenu'), 200);
					parent.querySelector('.babymenu').setAttribute('aria-expanded', 'false');
					elm.classList.remove('hover');
				}
			})
			
		});

		// _end of submenus

		/* -- > STICKY SIDEBAR < -- */

		if ( this.siteHeader.classList.contains('header-scroll') ) {

			if ( document.body.classList.contains('template-index') ) {
				document.body.classList.add('index-margin-fix');
			}

			window.lst = window.scrollY;
			window.lhp = 0;

			this.SCROLL_StickyHelper = () =>{

	      var st = window.scrollY;

	      if ( st < 0 || Math.abs(lst - st) <= 5 ) 
	        return;	

	      if ( st <= window.lhp ) {
					this.siteHeader.classList.remove('animate');
					this.siteHeader.classList.remove('fix');
					this.siteHeader.classList.remove('ready');
	      } else {

		     	if ( st == 0 ) {

						this.siteHeader.classList.remove('animate');
						this.siteHeader.classList.remove('fix');
						this.siteHeader.classList.remove('ready');

		     	} else if ( st <= lst && ! this.siteHeader.classList.contains('fix') ) {
		     		window.lhp = this.siteHeader.offsetTop;
						this.siteHeader.classList.add('fix');
						setTimeout(()=>{
							this.siteHeader.classList.add('ready');
						}, 5);
						setTimeout(()=>{
							this.siteHeader.classList.add('animate');
						}, 25);

					} else if ( st > lst && this.siteHeader.classList.contains('animate') ) {
						this.siteHeader.classList.remove('animate');
						setTimeout(()=>{
							this.siteHeader.classList.remove('fix');
							this.siteHeader.classList.remove('ready');
						}, 105);
					}

				}

				window.lst = st;

			}

			window.addEventListener('scroll', this.SCROLL_StickyHelper, {passive:true});

		}

		// _end of stickyness

	}

	unmount(){
		window.removeEventListener('resize', this.RESIZE_SidebarHelper);
		window.removeEventListener('scroll', this.SCROLL_StickyHelper);
	}

}

customElements.define('main-header', MainHeader);

/* 
	* This is the class for modal sidebars
*/

class SidebarDrawer extends HTMLElement {

	constructor(){
		super();
		this.siteOverlay = document.getElementById('site-overlay');
		this.querySelector('.site-close-handle').addEventListener('click', ()=>{
			this.hide();
		});
	}

	show(){
		this.style.display = 'block';
		setTimeout(()=>{
			this.classList.add('active');
		}, 10);
		this.siteOverlay.classList.add('active');
		document.body.classList.add('sidebar-move');
		document.querySelector('html').classList.add('kill-overflow');
		this.style.height = `${window.innerHeight}px`;
		if ( this.id == "site-cart" ) {
			if ( document.querySelector('#cart-recommendations css-slider') ) {
				document.querySelector('#cart-recommendations css-slider').resetSlider();
			}
		}
		this._mountA11YHelper();
	}

	hide(){
		this.classList.remove('active');
		this.siteOverlay.classList.remove('active');
		document.body.classList.remove('sidebar-move');
		document.querySelector('html').classList.remove('kill-overflow');
		setTimeout(()=>{
			this.style.display = 'none';
		}, 250);
		this._unmountA11YHelper();
	}

	/*
		* a11y helpers / tab catcher 
	*/

	_mountA11YHelper(forcedFocus){

		let focusable = forcedFocus ? forcedFocus : this.querySelectorAll('[tabindex="0"], button, [href], input:not([type="hidden"]), select, textarea, .regular-select-cover');

		let firstFocusable = focusable[0];
		let lastFocusable = focusable[focusable.length - 1];

		if ( this.id == 'site-cart' && this.querySelector('.cart-holder').getAttribute('data-items') != '0' ) {
			lastFocusable = focusable[focusable.length - 2];
		}

		this.A11Y_TAB_EVENT = ((firstFocusable, lastFocusable, e)=>{
		  let isTabPressed = (e.key === 'Tab' || e.keyCode === window.KEYCODES.TAB);
		  if (!isTabPressed) { 
		    return; 
		  }
		  if ( e.shiftKey ) /* shift + tab */ {
		    if (document.activeElement === firstFocusable) {
	     		lastFocusable.focus();
	        e.preventDefault();
	      }
	    } else /* tab */ {
		    if (document.activeElement === lastFocusable) {
	      	firstFocusable.focus();
	        e.preventDefault();
	      }
	    }
		}).bind(this, firstFocusable, lastFocusable)

 		this.addEventListener('keydown', this.A11Y_TAB_EVENT);

	}

	_unmountA11YHelper(){
		this.removeEventListener('keydown', this.A11Y_TAB_EVENT);
	}

}

customElements.define('sidebar-drawer', SidebarDrawer);

/* ---
	Announcement bar
--- */

class AnnouncementBar extends HTMLElement {
	constructor(){
		super();
		if ( document.querySelector('.announcement__exit') ) {
			document.querySelector('.announcement__exit').addEventListener('click', ()=>{
				document.body.classList.remove('show-announcement-bar');
				localStorage.setItem('announcement-dismissed', 'true');
				document.querySelector('.site-header').style.marginTop = '0px';
				this.style.display = 'none';
			})
		}

	}
}
customElements.define('announcement-bar', AnnouncementBar);
class CartForm extends HTMLElement {

	constructor(){
		super();
		this.ajaxifyCartItems();
	}

	ajaxifyCartItems(){

		this.form = this.querySelector('form');

		this.querySelectorAll('.cart-item').forEach(item=>{

			const remove = item.querySelector('.remove');
			if ( remove ) {
				remove.dataset.href = remove.getAttribute('href');
				remove.setAttribute('href', '');
				remove.addEventListener('click', (e)=>{
					e.preventDefault();
					this.updateCartQty(item, 0);
				})
			}

			const qty = item.querySelector('.qty');
			if ( qty ) {
				qty.addEventListener('input', debounce(e=>{
					e.preventDefault();
					e.target.blur();
					this.updateCartQty(item, parseInt(qty.value));
				}, 300));
				qty.addEventListener('click', (e)=>{
					e.target.select();
				})
			}

		})

	}

	updateCartQty(item, newQty){

		this.form.classList.add('processing');
		if ( this.querySelector('.alert') ) {
			this.querySelector('.alert').remove();
		}

    const body = JSON.stringify({
      id: item.dataset.id,
      quantity: newQty
    });

		fetch(KROWN.settings.routes.cart_change_url, {
    		method: 'POST',
    		headers: { 'Content-Type': 'application/json', 'Accept': 'application/javascript' },
    		body
    	})
      .then(response => {
      	if ( response.ok ) {
      		return fetch('?section_id=cart-helper')
      	} else {
      		throw new Error('Something went wrong');
      	}
      })
      .then(response => response.text())
      .then(text => {

        const sectionInnerHTML = new DOMParser().parseFromString(text, 'text/html');
        const cartFormInnerHTML = sectionInnerHTML.getElementById('AjaxCartForm').innerHTML;
        const cartSubtotalInnerHTML = sectionInnerHTML.getElementById('AjaxCartSubtotal').innerHTML;

        const cartItems = document.getElementById('AjaxCartForm');
        cartItems.innerHTML = cartFormInnerHTML;
        cartItems.ajaxifyCartItems();
        document.querySelector('[data-header-cart-count]').textContent = cartItems.querySelector('[data-cart-count]').textContent;

        if ( newQty == 0 && document.getElementById('cart-recommendations') ) {
	        document.getElementById('cart-recommendations').innerHTML = '';
	        document.getElementById('cart-recommendations').generateRecommendations();
        }
        
        if ( newQty != 0 && newQty > parseInt(cartItems.querySelector(`.cart-item[data-id="${item.dataset.id}"]`).dataset.qty) ) {
	        let alert = document.createElement('span');
	        alert.classList.add('alert', 'alert--error');
	        alert.textContent = KROWN.settings.locales.cart_add_error.replace('{{ title }}', item.dataset.title);
	        this.form.prepend(alert);
        } 

        document.getElementById('AjaxCartSubtotal').innerHTML = cartSubtotalInnerHTML;
    		window.preloadImages(cartItems);

    		if ( document.body.classList.contains('template-cart') ) {
    			document.querySelector('#section-cart .box__heading .subtitle').innerHTML = document.querySelector('#AjaxCartForm .subtitle').innerHTML;
    			if ( document.getElementById('AjaxCartSubtotal').querySelector('[data-cart-empty]') ) {
    				document.querySelector('#section-cart .box__heading .subtitle').innerHTML = "";
    				if ( ! document.getElementById('AjaxCartSubtotal').querySelector('.main-cart-empty-content') ) {
    					document.getElementById('AjaxCartSubtotal').append(document.getElementById('section-cart').querySelector('template').content.cloneNode(true))
    				} else {
    					document.getElementById('AjaxCartSubtotal').querySelector('.main-cart-empty-content').style.display = 'block';
    				}
    			} else if ( document.getElementById('AjaxCartSubtotal').querySelector('.main-cart-empty-content') ) {
  					document.getElementById('AjaxCartSubtotal').querySelector('.main-cart-empty-content').style.display = 'none';
    			}
    		}

      })
      .catch(e => {
      	console.log(e);
        let alert = document.createElement('span');
        alert.classList.add('alert', 'alert--error');
        alert.textContent = KROWN.settings.locales.cart_general_error;
        this.form.prepend(alert);
      })
      .finally(() => {
				this.form.classList.remove('processing');
      });
	}

} 

customElements.define('cart-form', CartForm);

class CartProductQuantity extends HTMLElement {
	constructor(){
		super();
		this.querySelector('.qty-minus').addEventListener('click', this.changeCartInput.bind(this));
		this.querySelector('.qty-plus').addEventListener('click', this.changeCartInput.bind(this));
	}
	changeCartInput(){
		setTimeout(()=>{
			document.getElementById('AjaxCartForm').updateCartQty(this.closest('.cart-item'), parseInt(this.querySelector('.qty').value));
		}, 50);
	}
}
customElements.define('cart-product-quantity', CartProductQuantity);

class CartProductRecommendations extends HTMLElement {

	constructor(){
		super();
		this.generateRecommendations();
	}

	generateRecommendations(){
		const cartItems = document.getElementById('AjaxCartForm').querySelectorAll('.cart-item');
		if ( cartItems.length > 0 ) {
			let recommendationsDOM = document.createElement('div');

			fetch(`${KROWN.settings.routes.product_recommendations_url}?section_id=cart-recommendations&product_id=${cartItems[0].dataset.productId}&limit=6`)
				.then(response => response.text())
				.then(text => {
					const innerHTML = new DOMParser()
            .parseFromString(text, 'text/html')
            .querySelector('.cart-product-recommendations');
          if ( innerHTML && innerHTML.querySelectorAll('.cart-product-item').length > 0 ) {
          	document.getElementById('cart-recommendations').innerHTML = innerHTML.innerHTML;
          }
				})
		}
	}
}
customElements.define('cart-product-recommendations', CartProductRecommendations);
class QuickAddToCart extends HTMLElement {
	constructor(){
		super();
		if ( this.querySelector('product-form') ) {
			this.init();
		}
	}
	init(){
		this.querySelector('product-form').addEventListener('add-to-cart', ()=>{
			if ( ! document.body.classList.contains('template-cart') ) {
				window.preloadImages(document.getElementById('site-cart'));
	 			document.getElementById('site-cart').show();
	 			if ( document.getElementById('cart-recommendations') ) {
	        document.getElementById('cart-recommendations').generateRecommendations();
	      }
			} else {
				document.querySelector('#section-cart .box__text').scrollIntoView();
  			document.querySelector('#section-cart .box__heading .subtitle').innerHTML = document.querySelector('#AjaxCartForm .subtitle').innerHTML;
			}
 		});
	}
}

customElements.define('quick-add-to-cart', QuickAddToCart);

class QuickViewProduct extends HTMLElement {
	constructor(){
		super();
		if ( this.querySelector('a') ) {
			this.init();
		}
	}
	init(){

		this.quickViewModal = null;
		this.querySelector('a').addEventListener('click', (e)=>{

			e.preventDefault();

			if ( ! this.quickViewModal ) {

				const target = e.currentTarget;

				target.classList.add('working');

				fetch(`${target.getAttribute('href')}${ target.getAttribute('href').includes('?') ? '&' : '?' }view=quick-view`)
					.then(response => response.text())
					.then(text => {

						// create modal w content

	        	const quickViewHTML = new DOMParser().parseFromString(text, 'text/html').querySelector('#product-product-quick-view');
	        	this.quickViewModal = basicLightbox.create(quickViewHTML);
	        	this.quickViewModal.show();
	        	this.quickViewModal.element().querySelector('.basicLightboxClose').addEventListener('click', ()=>{
	        		this.quickViewModal.close();
	        	});
	        	target.classList.remove('working');

						// setup images for variant selector

						const quickProduct = this.quickViewModal.element();
						const quickProductImage = quickProduct.querySelector('.product-images img');

						const quickViewImages = JSON.parse(quickProduct.querySelector('.product-images').querySelector('[type="application/json"]').textContent);

						const productVariants = quickProduct.querySelector('product-variants');
						if ( productVariants ) {
							productVariants.addEventListener('VARIANT_CHANGE', (e)=>{
								const variant = e.target.currentVariant;
								if ( variant && variant.featured_media != null && quickViewImages[variant.id] != null ) {
									quickProductImage.setAttribute('srcset', quickViewImages[variant.id]);
								}
							})
						}

						// setup add to cart functionality

					 	if ( ! document.body.classList.contains('template-cart') && KROWN.settings.cart_action == 'overlay' ) {

				 			let addToCartEnter = false;
							if ( quickProduct.querySelector('.product--add-to-cart-button') ) {
						 		quickProduct.querySelector('.product--add-to-cart-button').addEventListener('keyup', e=>{
									if ( e.keyCode == window.KEYCODES.RETURN ) {
										addToCartEnter = true;
									}
						 		})
						 	}

						 	if ( quickProduct.querySelector('.product--add-to-cart-form') ) {
						 		quickProduct.querySelector('.product--add-to-cart-form').addEventListener('add-to-cart', ()=>{
					    		window.preloadImages(document.getElementById('site-cart'));
						 			document.getElementById('site-cart').show();
						 			if ( document.getElementById('cart-recommendations') ) {
						        document.getElementById('cart-recommendations').generateRecommendations();
					        }
						 			if ( addToCartEnter ) {
										setTimeout(()=>{
											document.querySelector('#site-cart .sidebar__cart-close').focus();
										}, 200);
						 			}
						 		});
						 	}

					 	}

	        });

			} else {
      	this.quickViewModal.show();
			}

		})
	}
}

customElements.define('quick-view-product', QuickViewProduct);
class ProductModel extends HTMLElement {
  constructor() {
    super();  
    Shopify.loadFeatures([
      {
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: this.setupModelViewerUI.bind(this),
      },
    ]);
  }
  setupModelViewerUI(errors) {
    if (errors) return;
    this.modelViewerUI = new Shopify.ModelViewerUI(this.querySelector('model-viewer'));
    const modelViewerEl = this.modelViewerUI.viewer;
    modelViewerEl.addEventListener('shopify_model_viewer_ui_toggle_play', ()=>{
      if ( modelViewerEl.closest('.css-slider-holder') ) {
        modelViewerEl.closest('.css-slider-holder').classList.add('css-slider--disable-dragging');
      }        
    });
    modelViewerEl.addEventListener('shopify_model_viewer_ui_toggle_pause', ()=>{
      if ( modelViewerEl.closest('.css-slider-holder') ) {
        modelViewerEl.closest('.css-slider-holder').classList.remove('css-slider--disable-dragging');
      }        
    });
    if ( modelViewerEl.closest('.product-gallery__item') && modelViewerEl.closest('.product-gallery__item').dataset.index == '0' ) {
      if ( modelViewerEl.closest('.css-slider-holder') ) {
        modelViewerEl.closest('.css-slider-holder').classList.add('css-slider--disable-dragging');
      }  
    }
  }
}
customElements.define('product-model', ProductModel);

window.ProductModel = {
  loadShopifyXR() {
    Shopify.loadFeatures([
      {
        name: 'shopify-xr',
        version: '1.0',
        onLoad: this.setupShopifyXR.bind(this),
      },
    ]);
  },

  setupShopifyXR(errors) {
    
    if (errors) return;
    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', () =>
        this.setupShopifyXR()
      );
      return;
    }
    document.querySelectorAll('[id^="ProductJSON-"]').forEach((modelJSON) => {
      window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));
      modelJSON.remove();
    });
    window.ShopifyXR.setupXRElements();
  }
};
class ProductQuantity extends HTMLElement {

	constructor(){

		super();

		const qty = this.querySelector('.qty-selector'),
					qtyMinus = this.querySelector('.qty-minus'),
					qtyPlus = this.querySelector('.qty-plus'),
					qtyMin = qty.getAttribute('min') ? parseInt(qty.getAttribute('min')) : 1,
					qtyMax = qty.getAttribute('max') ? parseInt(qty.getAttribute('max')) : 999;

		if ( parseInt(qty.value) - 1 < qtyMin ) {
			qtyMinus.classList.add('disabled');
		}
		if ( parseInt(qty.value) + 1 > qtyMax ) {
			qtyPlus.classList.add('disabled');
		}

		qtyMinus.addEventListener('click', (e)=>{
			e.preventDefault();
			if ( ! qtyMinus.classList.contains('disabled') ) {
				const currentQty = parseInt(qty.value);
				if ( currentQty - 1 >= qtyMin ) {
					qty.value = currentQty - 1;
					qtyPlus.classList.remove('disabled');
				} 
				if ( currentQty - 1 <= qtyMin ) {
					qtyMinus.classList.add('disabled');
				}
			}
		});

		qtyPlus.addEventListener('click', (e)=>{
			e.preventDefault();
			if ( ! qtyPlus.classList.contains('disabled') ) {
				const currentQty = parseInt(qty.value);
				if ( currentQty + 1 <= qtyMax ) {
					qty.value = currentQty + 1;
					qtyMinus.classList.remove('disabled');
				} 
				if ( currentQty + 1 >= qtyMax ) {
					qtyPlus.classList.add('disabled');
				}
			}
		});

	}
	
}

customElements.define('product-quantity', ProductQuantity);
class SiteFilterHandle extends HTMLElement {
	constructor(){
		super();
		const sidebarFilters = document.getElementById('site-filters');
		this.addEventListener('click', e=>{
			e.preventDefault();
			this.setAttribute('aria-expanded', 'true');
			sidebarFilters.show();
		})
		this.addEventListener('keyup', e=>{
			if ( e.keyCode == window.KEYCODES.RETURN ) {
				sidebarFilters.querySelector('.site-close-handle').focus();
			}
		})
	}
}
customElements.define('site-filter-handle', SiteFilterHandle);

/* ---
	Product Page
--- */

class ProductPage extends HTMLElement {

	constructor(){

		super();

		if ( ! this.hasAttribute('data-empty-product' ) ) {

			this.productGallery = this.querySelector('.product-gallery');
			this.productSlider = this.querySelector('css-slider');

			// Gallery thumbnails

			if ( this.querySelector('.product-gallery__thumbnails .thumbnail') ) {

				this.querySelectorAll('.product-gallery__thumbnails .thumbnail').forEach((elm, i)=>{
					if ( i == 0 )
						elm.classList.add('active');
					elm.addEventListener('click',e=>{
						if ( this.productSlider.sliderEnabled ) {
							this.productSlider.changeSlide(e.currentTarget.dataset.index);
						} else {
							window.scrollTo({
		          	top: this.productGallery.querySelector(`.product-gallery-item[data-index="${e.currentTarget.dataset.index}"]`).offsetTop + this.offsetTop,
		            behavior: 'smooth'
		          });
							this.thumbnailNavigationHelper(e.currentTarget.dataset.index);
						}
						pauseAllMedia();
						//playMedia(this.productGallery.querySelector(`.product-gallery-item[data-index="${e.currentTarget.dataset.index}"]`));
					});
				})

				this.productSlider.addEventListener('change', e=>{
					this.thumbnailNavigationHelper(e.target.index);
				});

			}

			this.productSlider.addEventListener('navigation', e=>{
				//playMedia(this.productGallery.querySelector(`.product-gallery-item[data-index="${e.target.index}"]`));
			})
			this.productSlider.addEventListener('change', e=>{
				if ( this.productGallery.querySelector(`.product-gallery-item[data-index="${e.target.index}"]`).dataset.productMediaType == 'model' && this.xrButton ) {
					this.xrButton.setAttribute('data-shopify-model3d-id', this.productGallery.querySelector(`.product-gallery-item[data-index="${e.target.index}"]`).dataset.mediaId);
				}
				pauseAllMedia();
				this.thumbnailNavigationHelper(e.target.index);
			});

			// Product variant event listener for theme specific logic

			const productVariants = this.querySelector('product-variants');
			if ( productVariants ) {
				productVariants.addEventListener('VARIANT_CHANGE', this.onVariantChangeHandler.bind(this));
				this.onVariantChangeHandler({target:productVariants});
			}

			// show cart drawer when element is added to cart

		 	if ( ! document.body.classList.contains('template-cart') && KROWN.settings.cart_action == 'overlay' ) {

				let addToCartEnter = false;
				if ( this.querySelector('.product--add-to-cart-button') ) {
			 		this.querySelector('.product--add-to-cart-button').addEventListener('keyup', e=>{
						if ( e.keyCode == window.KEYCODES.RETURN ) {
							addToCartEnter = true;
						}
			 		})
			 	}

			 	if ( this.querySelector('.product--add-to-cart-form') ) {
			 		this.querySelector('.product--add-to-cart-form').addEventListener('add-to-cart', ()=>{
		    		window.preloadImages(document.getElementById('site-cart'));
			 			document.getElementById('site-cart').show();
			 			if ( document.getElementById('cart-recommendations') ) {
			        document.getElementById('cart-recommendations').generateRecommendations();
		        }
			 			if ( addToCartEnter ) {
							setTimeout(()=>{
								document.querySelector('#site-cart .sidebar__cart-close').focus();
							}, 200);
			 			}
			 		});
			 	}

		 	}

			// Scroll navigation helper 

			if ( this.productGallery.dataset.style == "scroll" ) {

				this.productGalleryNavigation = this.querySelector('.product-gallery__thumbnails');
				this.productGalleryNavigationItem = this.querySelectorAll('.product-gallery__thumbnails .thumbnail');

				const productGallerySlides = this.productGallery.querySelectorAll('.product-gallery-item');
				const reversedGallerySlides = [...productGallerySlides].reverse();

				const checkIfProductIsFirst = this.parentNode == document.querySelector('#main .mount-product-page:first-child') ? document.querySelector('#main .mount-product-page:first-child .product-gallery__thumbnails') : false;

				this.GALLERY_NAVIGATION_SCROLL = () => { 
					if ( ! this.productGallery.querySelector('css-slider').sliderEnabled && window.innerWidth > 1023 ) {

						for ( const slide of reversedGallerySlides ) {
							const slideTop = slide.getBoundingClientRect().top;
							if ( slideTop < window.innerHeight / 2 && slideTop > -window.innerHeight / 2  ) {
								this.productGalleryNavigationItem.forEach(elm=>elm.classList.remove('active'));
								this.productGalleryNavigationItem[slide.dataset.index].classList.add('active');
								break;
							} 
						}

						const productGalleryTop = this.productGallery.getBoundingClientRect().top;
						if ( (productGalleryTop - window.innerHeight) * -1 > this.productGallery.offsetHeight ) {
							this.productGalleryNavigation.classList.add('scroll');
							this.productGalleryNavigation.classList.remove('scroll-up');
						} else if ( productGalleryTop > 0 ) {
							this.productGalleryNavigation.classList.add('scroll-up');
							this.productGalleryNavigation.classList.add('scroll');
							if ( checkIfProductIsFirst ) {
								checkIfProductIsFirst.style.height = `calc( var(--window-height) + ${window.scrollY}px )`;
							}
						} else if ( (productGalleryTop - window.innerHeight) * -1 < this.productGallery.offsetHeight ) {
							this.productGalleryNavigation.classList.remove('scroll');
							this.productGalleryNavigation.classList.remove('scroll-up');
						}

					}

				}

				window.addEventListener('scroll', this.GALLERY_NAVIGATION_SCROLL, {passive:true});
				this.GALLERY_NAVIGATION_SCROLL();

			}

			// Slider navigation helper

			if ( this.productGallery.dataset.style == "slider" ) {

				const checkIfProductIsFirst = document.querySelector('#main .mount-product-page:first-child');

				this.GALLERY_NAVIGATION_SCROLL = () => { 

					const productGalleryTop = this.productGallery.getBoundingClientRect().top;

					if ( productGalleryTop > 0 ) {
						this.productGallery.classList.add('nav-scroll');
						if ( checkIfProductIsFirst && checkIfProductIsFirst.querySelector('.css-slider-navigation-container') ) {
							checkIfProductIsFirst.querySelector('.css-slider-navigation-container').style.height = `calc( var(--window-height) + ${window.scrollY}px )`;
						}
					} else if ( productGalleryTop < 0 ) {
						this.productGallery.classList.remove('nav-scroll');
						this.productGallery.classList.remove('nav-scroll-up');
					}

				}

				window.addEventListener('scroll', this.GALLERY_NAVIGATION_SCROLL, {passive:true});
				this.GALLERY_NAVIGATION_SCROLL();

			}

		 	// Check for models

		 	const models = this.querySelectorAll('product-model');
		 	if ( models.length > 0 ) {
		 		window.ProductModel.loadShopifyXR();
		 		this.xrButton = this.querySelector('.product__view-in-space');
		 	}

		 	// Change sticky position for text content

		 	const productContentBox = this.querySelector('.box__product-content');
		 	const productGalleryBox = this.querySelector('.box__product-gallery');

		 	this.CONTENT_STICKY_RESIZE = () => {
		 		productContentBox.style.top = `calc(100vh - ${productContentBox.offsetHeight}px)`;
		 		productGalleryBox.style.top = `calc(100vh - ${productGalleryBox.offsetHeight}px)`;
		 	}
			window.addEventListener('resize', this.CONTENT_STICKY_RESIZE, {passive:true});
			this.CONTENT_STICKY_RESIZE();

		  const contentObserver = new MutationObserver(mutations=>{
	      for ( const mutation of mutations ) {
					this.CONTENT_STICKY_RESIZE();
	      }
	    });
	    contentObserver.observe(productContentBox,{ attributes: true, childList: true, subtree: true });

	    // Assist for video popups
	    
	    if ( this.productGallery.querySelector('video-popup') ) {
	    	
			  const productVideoObserver = new MutationObserver(mutations=>{
		      for ( const mutation of mutations ) {
						if ( mutation.target.classList.contains('video-opened') ) {
							this.productGallery.classList.add('remove-navigation');
						} else {
							this.productGallery.classList.remove('remove-navigation');
						}
		      }
		    });
		    this.productGallery.querySelectorAll('video-popup').forEach(elm=>{
		    	productVideoObserver.observe(elm,{ attributes: true, childList: false, subtree: false });
		    })

	    }

		}

	}

	thumbnailNavigationHelper(index=0){
		this.querySelectorAll('.product-gallery__thumbnails .thumbnail').forEach((elm, i)=>{
			if ( i == index )
				elm.classList.add('active');
			else 
				elm.classList.remove('active');
		});
	}

	onVariantChangeHandler(e){
		const variant = e.target.currentVariant;
		if ( variant && variant.featured_media != null ) {
			const variantImg = this.productGallery.querySelector('.product-gallery-item[data-media-id="' + variant.featured_media.id + '"]');
			if ( variantImg ) {
				if ( this.productGallery.dataset.style == "slider" || ( this.productGallery.dataset.style == "scroll" && this.productGallery.querySelector('css-slider').sliderEnabled ) ) {
					this.productGallery.querySelector('css-slider').changeSlide(variantImg.dataset.index);
				} else {
					this.productGallery.querySelector('css-slider').prepend(variantImg);
					this.reorderThumbnailNavigation();
				}
			}
		}
	}

	reorderThumbnailNavigation(index){
		const reversedGallerySlidesForThumbnails = [...this.productGallery.querySelectorAll('.product-gallery-item')].reverse();
		const galleryThumbnailsHolder = this.querySelector('.product-gallery__thumbnails .thumbnails-holder .thumbnails');
		reversedGallerySlidesForThumbnails.forEach(slide=>{
			galleryThumbnailsHolder.prepend(this.querySelector(`.product-gallery__thumbnails .thumbnail[data-index="${slide.dataset.index}"]`));
		})
		this.querySelectorAll('.product-gallery__thumbnails .thumbnails-holder .thumbnail').forEach((elm, i) => {
			elm.setAttribute('data-index', i);
		})
		this.thumbnailNavigationHelper(0);
		setTimeout(()=>{
			this.thumbnailNavigationHelper(0);
		}, 10);
	}

}

customElements.define('product-page', ProductPage);


/* ---
	Product Reviews
--- */

class ProductReviews {

  constructor(_this){

    const observer = new MutationObserver((mutations, observer)=>{
      for ( const mutation of mutations ) {
        if ( mutation.addedNodes.length > 0 ) {
          mutation.addedNodes.forEach(elm=>{
            if ( elm.tagName == 'DIV' && elm.classList.contains('spr-container') ) {
            	this.init(elm);
              observer.disconnect();
            } 
          });
        }
      }
    })

    _this.classList.add('observe-reviews');

  	if ( _this.querySelector('.spr-review') ) {
  		this.init(_this.querySelector('.spr-container'))
  	} else {
    	observer.observe(_this, {childList: true})
  	}
  }

  init(elm){

  	elm.closest('#shopify-product-reviews').classList.remove('observe-reviews');

  	// redo reviews title

  	const ratingTextEl = document.querySelector('.product__price-reviews .rating-text');

  	if ( document.querySelector('#shopify-product-reviews .spr-summary-starrating') ) {
	  	document.querySelector('#shopify-product-reviews .spr-summary-starrating').prepend(this.createRatingEl(document.querySelector('.spr-summary-starrating'), 'spr-custom-rating', (ratingTextEl ? ratingTextEl.textContent : '')));
  	}

  	// recreate section structure

  	elm.classList = "site-box-container container--fullscreen box--can-stick";

		const reviewsHeader = elm.querySelector('.spr-header');
  	if ( reviewsHeader ) {
    	reviewsHeader.classList = "site-box box--big lap--box--small-fl palm--box--small-fl box--typo-big box--center-align box--column-flow box__heading";
    	reviewsHeader.setAttribute('data-order', '0');
    	reviewsHeader.style.borderBottom = "none";
    	reviewsHeader.innerHTML = `<div class="site-box-content" 
    		style="display:flex;flex-direction:column"
    	>${ reviewsHeader.innerHTML }</div>`;
    	reviewsHeader.querySelector('.spr-header-title').classList = "h1 title";
    	reviewsHeader.querySelector('.spr-summary-actions-newreview').classList.add("button");
    	reviewsHeader.querySelector('.spr-summary-actions-newreview').classList.add("button--solid");
  	}

		const reviewsContent = elm.querySelector('.spr-content');
  	if ( reviewsContent ) {
  		reviewsContent.classList = "site-box box--big lap--box--bigger box__text box--typo-big box--center-align box--column-flow";
    	reviewsContent.setAttribute('data-order', '1');
    	if ( reviewsContent.querySelector('.spr-reviews').children.length <= 0 ) {
    		reviewsContent.querySelector('.spr-reviews').innerHTML = `<p class="text-size--larger">${KROWN.settings.locales.product_no_reviews}</p>`;
    		reviewsContent.querySelector('.spr-reviews').style.display = "block";
    		reviewsHeader.querySelector('.spr-summary-caption').remove();
    	}
    	reviewsContent.querySelector('.spr-reviews').classList = "site-box-content";
  	}

    // turn form into popup

    const reviewForm = document.createElement('div');
    reviewForm.id = 'spr-form-modal';
    reviewForm.innerHTML = `<div id="spr-form" class="spr-form-holder address-popup">
      <div class="basicLightboxClose">×</div>
    </div>`;
    
    const reviewModalForm = basicLightbox.create(reviewForm);
    document.querySelector('.spr-summary-actions-newreview').setAttribute('onclick', '');
    document.querySelector('.spr-summary-actions-newreview').addEventListener('click', e=>{
      e.preventDefault();
      reviewModalForm.show(()=>{
      	if ( reviewModalForm.element().querySelector('.basicLightboxClose') ) {
	        reviewModalForm.element().querySelector('.basicLightboxClose').addEventListener('click', ()=>{
	          reviewModalForm.close();
	        });
      	}
      })
    })

    reviewModalForm.element().querySelector('.spr-form-holder').prepend(elm.querySelector('.spr-form'));
    reviewModalForm.element().querySelector('.spr-form').style.display = 'block';
    reviewModalForm.element().querySelector('.spr-button').classList = "button button--solid";

    // recreate reviews & pagination

    this.redoReviews(elm);
   // this.redoPagination(elm);

  } 

  redoReviews(elm) {

    elm.querySelectorAll('.spr-review').forEach(review=>{
    	review.querySelector('.spr-review-header').insertBefore(this.createRatingEl(review, 'spr-review-custom-rating'), review.querySelector('.spr-review-header').firstElementChild.nextSibling);
    });

    const reviewsPagination = elm.querySelector('.spr-pagination');
    if ( reviewsPagination ) {
    	reviewsPagination.querySelector('div').classList = "pagination pagination--small";
    	if ( reviewsPagination.querySelector('.spr-pagination-prev') ) {
    		reviewsPagination.querySelector('.spr-pagination-prev a').innerHTML = `<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.46442 7.94185L0.0502109 6.52764L6.53549 0.0423586L7.94971 1.45657L1.46442 7.94185Z" fill="#262627"/>
							<path d="M0.0503636 6.49961L1.46458 5.0854L7.94986 11.5707L6.53564 12.9849L0.0503636 6.49961Z" fill="#262627"/>
						</svg>`;
    	}

    	if ( reviewsPagination.querySelector('.spr-pagination-next') ) {
    		reviewsPagination.querySelector('.spr-pagination-next a').innerHTML = `<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.53557 5.08537L7.94979 6.49958L1.46451 12.9849L0.0502931 11.5706L6.53557 5.08537Z" fill="#262627"/>
						<path d="M7.94964 6.52761L6.53542 7.94182L0.050142 1.45654L1.46436 0.0423289L7.94964 6.52761Z" fill="#262627"/>
					</svg>`;
    	}
    }

    if ( this.reviewsObserver ) {
    	this.reviewsObserver.disconnect();
    }

  	this.reviewsObserver = new MutationObserver((mutations, observer)=>{
      for ( const mutation of mutations ) {
		    this.redoReviews(elm);
      }
    })
  	this.reviewsObserver.observe(elm, {childList: true, subtree: true})

  }

  createRatingEl(elm, className, textContent=""){
	  const ra = elm.querySelectorAll('.spr-icon-star').length,
	      	rb = elm.querySelectorAll('.spr-icon-star-half-alt').length > 0 ? '.5' : '',
	 				ratingEl = document.createElement('span');
  	ratingEl.classList = `${className} text-size--regular`;
  	ratingEl.innerHTML = `<span>${ textContent != "" ? textContent : `${(ra + rb)} / 5` }</span>${KROWN.settings.symbols.star}`;
  	return ratingEl;
	}

}

if ( document.getElementById('shopify-product-reviews') ) {
	new ProductReviews(document.getElementById('shopify-product-reviews'));
}
class CountdownClock extends HTMLElement {

	constructor(){

		super();

    this.daysEl = this.querySelector('.days');
    this.hoursEl = this.querySelector('.hours');
    this.minutesEl = this.querySelector('.minutes');
    this.secondsEl = this.querySelector('.seconds');

    const date = this.dataset.date.split(',');
    this.COUNT = new Date(date[0], (date[1]-1), date[2], date[3]);

    const gmt = parseInt(this.dataset.timezone);
  	const timezone = this.COUNT.getTimezoneOffset() / -60;

    if ( timezone != gmt ) {
    	this.COUNT.setHours(parseInt(date[3]) + timezone - gmt );
    } 

    this._countdownBannerInterval = setInterval(this._countEachSecond.bind(this), 1000);
    this._countEachSecond();
    if ( this.classList.contains('hide') ) {
      this.classList.remove('hide');
    }

	}

  _countEachSecond(){

    const now = new Date().getTime(),
      distance = this.COUNT - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.daysEl.innerHTML = days < 10 ? `<span>0</span><span>${days}</span>` : days.toString().split('').map(digit=>`<span>${digit}</span>`).join("");
    this.hoursEl.innerHTML = hours < 10 ? `<span>0</span><span>${hours}</span>` : hours.toString().split('').map(digit=>`<span>${digit}</span>`).join("");
    this.minutesEl.innerHTML = minutes < 10 ? `<span>0</span><span>${minutes}</span>` : minutes.toString().split('').map(digit=>`<span>${digit}</span>`).join("");
    this.secondsEl.innerHTML = seconds < 10 ? `<span>0</span><span>${seconds}</span>` : seconds.toString().split('').map(digit=>`<span>${digit}</span>`).join("");

    if ( distance < 0 ) {
      clearInterval(this._countdownBannerInterval);
      this.daysEl.innerHTML = '<span>0</span><span>0</span>';
      this.hoursEl.innerHTML = '<span>0</span><span>0</span>';
      this.minutesEl.innerHTML = '<span>0</span><span>0</span>';
      this.secondsEl.innerHTML = '<span>0</span><span>0</span>';
    }
  }

}
customElements.define('countdown-clock', CountdownClock);
window.lightMapStyle=[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},
{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},
{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}];

window.darkMapStyle=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},
{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},
{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}];

class ContactMap extends HTMLElement {

	constructor(){
		super();
		this.mount();
	}

	mount(){
		
		if ( this.dataset.address != "" ) {
			if ( typeof google !== 'undefined' && google.maps ) {
				this._createMap();
			} else {
				if ( window.loadingGoogleMapsScript ) {
					this.ti = setInterval(()=>{
						if ( typeof google !== 'undefined' ) {
							clearInterval(this.ti);
							this._createMap();
						}
					}, 100);
				} else {
					window.loadingGoogleMapsScript = true;
					var googleScript = document.createElement('script');
					googleScript.onload = (()=>{
						this._createMap();
					});
					googleScript.async = true
					googleScript.src = `https://maps.googleapis.com/maps/api/js?v=3&key=${this.dataset.key}`;
					document.head.appendChild(googleScript);
				}

			}

		}
	}

	_createMap(){

		const mapEl = this.querySelector('.contact-map-object'),
			mapDetails = this.querySelector('.contact-map-address-holder');

		const coordsKey = `map-coords-${mapEl.id}`;

		let coordsStorage = localStorage.getItem(coordsKey) != null ? JSON.parse(localStorage.getItem(coordsKey)) : null,
			mapLat = 0,
			mapLong = 0;

		if ( coordsStorage != null && coordsStorage['address'] == mapEl.dataset.address ) {
			mapLat = coordsStorage['lat'];
			mapLong = coordsStorage['long'];
		}

   	let geocoder, map, address;

		geocoder = new google.maps.Geocoder();
		address = mapEl.dataset.address;

    const mapOptions = {
      zoom: parseInt(mapEl.dataset.zoom),
      center: new google.maps.LatLng(mapLat, mapLong),
      streetViewControl: false,
      scrollwheel: false,
      panControl: true,
      mapTypeControl: false,
      overviewMapControl: false,
      zoomControl: true,
      draggable: true,
      styles: mapEl.dataset.style == 'light' ? window.lightMapStyle : window.darkMapStyle
    };			

    map = new google.maps.Map(document.getElementById(mapEl.id), mapOptions);

    if ( mapLat != 0 || mapLong != 0 ) {

	    const markerOptions = {
        position: new google.maps.LatLng(mapLat, mapLong),
        map: map, 
        title: address
	    }

	    if( mapEl.dataset.marker != 'none' ) {
	    	markerOptions['icon'] = {
          url: mapEl.dataset.marker,
          scaledSize: new google.maps.Size(60, 60)
	      }
	    }

	    mapDetails.querySelector('a').setAttribute('href', `http://www.google.com/maps/place/${mapLat},${mapLong}`);
	    const contentString = mapDetails.innerHTML;
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      const marker = new google.maps.Marker(markerOptions); 
      marker.addListener('click', ()=>{
        infowindow.open(map, marker);
        if ( window.innerWidth < 480 ) {
        	document.querySelector('.template-page-contact .box__heading .title').style.marginTop = '50px';
        } else if ( window.innerWidth < 768 ) {
        	document.querySelector('.template-page-contact .box__heading .title').style.marginTop = '100px';
        }
      });

      if ( window.innerWidth > 768 ) {
				map.panBy(-150, 150);
      } else {
				map.panBy(-75, 75);
      }

    } else {

	    if ( geocoder ) {

	    	geocoder.geocode( { 'address': address }, (results, status)=>{

	    		if (status == google.maps.GeocoderStatus.OK) {
	          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {

	          	map.setCenter(results[0].geometry.location);

					    const markerOptions = {
			          position: results[0].geometry.location,
			          map: map, 
			          title: address
					    }

					    if( mapEl.dataset.marker != 'none' ) {
					    	markerOptions['icon'] = {
				          url: mapEl.dataset.marker,
				          scaledSize: new google.maps.Size(60, 60)
					      }
					    }

					    mapDetails.querySelector('a').setAttribute('href', `http://www.google.com/maps/place/${results[0].geometry.location.lat()},${results[0].geometry.location.lng()}`);
					    const contentString = mapDetails.innerHTML;

			        const infowindow = new google.maps.InfoWindow({
			          content: contentString
			        });

	            const marker = new google.maps.Marker(markerOptions); 
			        marker.addListener('click', ()=>{
			          infowindow.open(map, marker);
			        });

		          if ( window.innerWidth > 768 ) {
								map.panBy(-150, 150);
		          } else {
								map.panBy(-75, 75);
		          }
		          
	  					localStorage.setItem(coordsKey, JSON.stringify({
	  						'address': mapEl.dataset.address,
	  						'lat': results[0].geometry.location.lat(),
	  						'long': results[0].geometry.location.lng()
	  					}));

	          } else {
	            alert("No results found for the given address");
	          }
	        } else {
	          console.log("Geocode was not successful for the following reason: " + status);
	        }

	    	});

   		}

   	}

	}

}
customElements.define('contact-map', ContactMap);
class SplitScreenSlider extends CSSSlider {

	constructor(){
		super();

		this.mount();
		this.RESIZE_SliderHelper = debounce(()=>{
			this.unmount();
			this.mount();
		}, 300);
		window.addEventListener('resize', this.RESIZE_SliderHelper, {passive:true});

	}

	mount(){

		this._currentScroll = window.scrollY;
		this._headerHeight = document.getElementById('site-header').offsetHeight;

		this._fullWidth = this.classList.contains('layout-full') ? true : false;

		this._scrollEnabled = true;

		this._screenHeight = Math.min(window.innerHeight, window.screen.availHeight);

		this.slides = this.querySelectorAll('.slider-item'),
		this.slidesMedia = this.querySelectorAll('.slider-item-media > div');
		this.slidesBlackArray = this.querySelectorAll('.slider-item-media-overlay');
		this.headings = this.querySelectorAll('.box__heading');

		this.slides.forEach((elm, key)=>{
			if ( key == 0 || window.scrollY >= this._getOffsetTop(elm) ) {
				this.slidesMedia[key].style.height = `100%`;
			} else {
				this.slidesMedia[key].style.height = `0`;
			}
			window.preloadImages(elm);
		});

		this.addEventListener('ready', ()=>{
			this.slides = this.querySelectorAll('.slider-item');
			this.slidesMediaElements = this.querySelectorAll('.slider-item-media-element');
			this.addEventListener('scroll', ()=>{
				const scrollX = -this.element.scrollLeft;
				this.slides.forEach((slide,i)=>{
			    const media = this.slidesMediaElements[i];
			    if ( media ) {
			    	media.style.transform = `translateX(${( slide.offsetLeft + scrollX ) * -1/3}px)`;
			    }
		    });
			});
		});

		let previous = -1,
			currentOld = -1;

		this.SCROLL_SliderHelper = () => {

			const scrollTop = window.scrollY >= 0 ? window.scrollY : 0;
			const sliderTop = this._getOffsetTop(this);

			if ( this._scrollEnabled ) {

				let current = 0;

				if ( scrollTop + this._headerHeight - this._headerHeight < this._getOffsetTop(this) && ! this.classList.contains('back-to-normal') ) {
					this.classList.add('back-to-normal');
				}

				this.slides.forEach((elm, key)=>{
					if ( this._checkVisible(elm) ) {
						current = key;
					}
				});

				if ( current != currentOld ) {
					if ( this._currentScroll < scrollTop && currentOld > 0 ) {
						this._scrollMedia( current, this.slides[currentOld], this.slides[previous], this.slidesMedia[currentOld], this.slidesBlackArray[previous], this._screenHeight);
					} else if ( this._currentScroll > window.scrollY && currentOld > 0 ) {
						this._scrollMedia( current, this.slides[currentOld], this.slides[previous], this.slidesMedia[currentOld], this.slidesBlackArray[previous], 0);
					}
					currentOld = current;
					previous = current-1;
				}

				if ( current == 0 && scrollTop + this._screenHeight >= sliderTop + this.offsetHeight && ! this.classList.contains('back-to-normal') ) {
					this.classList.add('back-to-normal');
				} else if ( current > 0 ) {

					const scrollValue = ( scrollTop - sliderTop ) - this._screenHeight * ( current - 1 );
					if ( ! this.classList.contains('back-to-normal') ) {
						this._scrollMedia( current, this.slides[current], this.slides[previous], this.slidesMedia[current], this.slidesBlackArray[previous], scrollValue);

					}
					if ( scrollTop + this._screenHeight >= sliderTop + this.offsetHeight && ! this.classList.contains('back-to-normal') ) {
						this.classList.add('back-to-normal');
					} else if ( scrollTop + this._screenHeight < sliderTop + this.offsetHeight && this.classList.contains('back-to-normal' ) ) {
						this.classList.remove('back-to-normal');
					}

				}

			}

			this._currentScroll = scrollTop;

		}

		window.addEventListener('scroll', this.SCROLL_SliderHelper, {passive:true});
		this.SCROLL_SliderHelper();

	}

	unmount() {
		window.removeEventListener('scroll', this.SCROLL_SliderHelper);
	}

	_scrollMedia(index, currentSlide, previousSlide, currentSlideMedia, previousSlideOverlay, scrollValue) {

		if ( this._fullWidth ) {
			currentSlideMedia.style.clipPath = `polygon(0 ${window.innerHeight - scrollValue + 1}px, 100% ${window.innerHeight - scrollValue + 1}px, 100% 100%, 0% 100%)`;
		} else {
			currentSlideMedia.style.height = `${scrollValue}px`;
		}

		if ( previousSlideOverlay ) {
			previousSlideOverlay.style.opacity = `${Math.ceil( scrollValue * 30 / this._screenHeight ) / 100}`;
		}

	}

	_checkVisible(elm) {
	  const rect = elm.getBoundingClientRect();
	  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
	}

	_getOffsetTop(elm) {
		if (!elm.getClientRects().length) {
      return 0;
    }
    const rect = elm.getBoundingClientRect();
    const win = elm.ownerDocument.defaultView;
    return rect.top + win.pageYOffset;
	}

}
customElements.define('split-screen-slider', SplitScreenSlider);

class VideoCustomElement extends HTMLElement {
	constructor(){
		super();
		const video = this.querySelector('video');
		if ( ! video.paused || video.readyState >= 2 ) {
			this.classList.add('loaded');
		} else {
			this.fallbackT = setTimeout((video=>{
				if ( video.paused ) {
					const fallback = this.closest('.slider-item-media').querySelector('img');
					this.remove();
					ribSetSize(fallback);
				}
			}).bind(this, video), 3000);
			video.addEventListener('canplay', e=>{
				this.classList.add('loaded');
				clearTimeout(this.fallbackT);
			});
		}
	}
}
customElements.define('video-custom-element', VideoCustomElement);
class VideoModalPopup extends HTMLElement {
	constructor(){
		super();
		const modal = basicLightbox.create(`<div class="video-popup-holder" data-video-type="${this.dataset.videoType}" style="padding-top: 56.25%">
				${this.querySelector('template').content.firstElementChild.innerHTML}
				<div class="basicLightboxClose">${KROWN.settings.symbols.close}</div>
			</div>`, {
			onShow: instance=>{
				setTimeout((instance=>{
					switch ( instance.element().querySelector('.video-popup-holder').dataset.videoType ) {
						case "youtube":
							instance.element().querySelector('.js-youtube').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
							break;
						case "vimeo":
							instance.element().querySelector('.js-vimeo').contentWindow.postMessage('{"method":"play"}', '*');
							break;
					}
				}).bind(this, instance), 500);
				instance.element().querySelector('.basicLightboxClose').addEventListener('click', ()=>{
					instance.close();
				})
			}
		});

		this.addEventListener('click', e=>{
			e.preventDefault();
			modal.show();
		});

	}
}
customElements.define('video-modal-popup', VideoModalPopup);
KROWN.themeName = 'Split';
KROWN.themeVersion = '3.0.2';

const executeOnceOnDomContentLoaded = ()=>{

  // fit video aspect

  reframe(document.querySelectorAll('.rte iframe[src*="youtube"], .rte iframe[src*="vimeo"]'));

  // tab navigation

  let activeElement = document.activeElement;
  document.addEventListener('keyup', e=>{
    if ( e.keyCode == window.KEYCODES.TAB ) {
      if ( activeElement.classList.contains('focus') && e.target != activeElement ) {
        activeElement.classList.remove('focus');
      }
      if ( e.target.classList.contains('product-variant__input') ||
      	e.target.classList.contains('button') ||
      	e.target.classList.contains('product-item') ||
      	e.target.classList.contains('spr-summary-actions-newreview') ||
      	e.target.classList.contains('site-box-content-to-focus')
      ) {
        e.target.classList.add('focus');
      } 
      activeElement = document.activeElement;
    }
  });

  // newsletter has jump

  if ( window.location.pathname.includes('/challenge') ) {
    setTimeout(()=>{
      window.scroll({
        top: 0, 
        behavior: 'auto'
      });
    }, 300);
  }

  // fix image link borders

  document.querySelectorAll('.rte a img').forEach(elm=>{
    elm.parentNode.style.border = 'none';
  });

  // fix quick add to cart

  setTimeout(()=>{
    if ( document.querySelector('modal-box quick-view-product') ) {
      document.querySelector('modal-box quick-view-product').init();
    }
    if ( document.querySelector('modal-box quick-add-to-cart') ) {
      document.querySelector('modal-box quick-add-to-cart').init();
      document.querySelector('modal-box product-form').init();
    }
  }, 3050);

}

if ( document.readyState !== 'loading' ) {
  executeOnceOnDomContentLoaded();
} else {
  document.addEventListener('DOMContentLoaded', executeOnceOnDomContentLoaded);
}