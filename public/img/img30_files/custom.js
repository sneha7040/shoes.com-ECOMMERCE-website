$(".featprdmainslider").slick({dots:!1,infinite:!1,arrows:!1,slidesToShow:1,slidesToScroll:1,asNavFor:".featprdthumbslider",responsive:[{breakpoint:749,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0}}]}),$(".featprdthumbslider").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".featprdmainslider",dots:!1,arrows:!0,infinite:!1,centerMode:!1,focusOnSelect:!0,responsive:[{breakpoint:749,settings:{arrows:!1}}]});function filterFeaturedGallery(){setTimeout(function(){var t=$(".FeaturedProduct__Info .ColorSwatch__Radio:checked").val();$(".featprdmainslider, .featprdthumbslider").slick("slickUnfilter"),$(".featprdmainslider, .featprdthumbslider").slick("slickFilter",$('.slick-slide[data-color="'+t+'"]')),$(".featprdmainslider, .featprdthumbslider").slick("refresh")},100)}$(document).ready(function(){filterFeaturedGallery(),updateSizeOptions()}),$(".FeaturedProduct__Info .ColorSwatch").click(function(t){filterFeaturedGallery()}),$(document).on("click",".ProductForm__Variants .ColorSwatchList li",function(){console.log("test"),updateSizeOptions()}),$(document).ready(function(){$(".searchcusinpt").keyup(function(){setTimeout(function(){$(".cusajaxsrchswlist").addClass("asa"),$(".cusajaxsrchswlist").slick({infinite:!1,slidesToShow:8,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}}]})},3e3)})});function updateSizeOptions(){if($(".ProductForm__Variants .SizeSwatchList li").removeClass("showOption"),$(".ProductForm__Variants .ColorSwatchList").length>0){var t=$(".ProductForm__Variants .ColorSwatchList :radio:checked").val().trim();console.log(t),$('select[name="id"] option[data-option_1="'+t+'"]').each(function(){$('.ProductForm__Variants .SizeSwatchList :radio[value="'+$(this).attr("data-option_2")+'"]').closest("li").addClass("showOption")})}else $(".ProductForm__Variants .SizeSwatchList :radio").closest("li").addClass("showOption")}$(document).on("click",".product-search-nm .ColorSwatch",function(){i=$(this).data("image-url"),var_url=$(this).data("variant-url"),console.log(i),$(this).closest(".ProductItem__Wrapper").find(".ProductItem__Image").attr("src",i),$(this).closest(".ProductItem__Wrapper").find(".ProductItem__Image").attr("srcset",i),console.log(var_url),$(this).closest(".ProductItem__Wrapper").find("a").attr("href",var_url),$(this).closest(".ProductItem__Wrapper-1").find(".ProductItem__Image").attr("src",i),$(this).closest(".ProductItem__Wrapper-1").find(".ProductItem__Image").attr("srcset",i),$(this).closest(".ProductItem__Wrapper-1").find("a").attr("href",var_url)}),$(document).on("click",".custom_ProductForm__AddToCart",function(t){var e=$(this).parents("form").serialize(),s=$(this).parents("form");$.ajax({url:"/cart/add.js",dataType:"json",cache:!1,type:"post",data:e,success:function(r){document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0})),document.getElementsByClassName("custom-cart-btn")[0].click()}})});
//# sourceMappingURL=/s/files/1/2428/5565/t/287/assets/custom.js.map?v=103058972158933981211655435093
