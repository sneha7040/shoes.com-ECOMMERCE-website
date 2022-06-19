//Quick View
//$.noConflict();

$(document).ready(function () {
//$.noConflict();
   $.getScript("//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js").done(function() {
    quickView();
    
    //alert(12);

   });

});
 

function quickView() {
  
  //$("body").append('<script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>');
  
  //alert();
 
  $(".quick-view").click(function () {
    //alert(12);  
    $("body").append('<script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"></script>');
     $("body").append('<script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>');
$("body").append('<script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>');
    
     

    if ($('#quick-view').length == 0){$("body").append('<div id="quick-view"></div>');}

    var product_handle = $(this).data('handle');

    $('#quick-view').addClass(product_handle);
    
    //console.log($(this).parents('.ProductItem ').find('.prd_rev_badge').html());
    
    var rating = $(this).parents('.ProductItem ').find('.prd_rev_badge').html();
    
    setTimeout(function(){

    jQuery.getJSON('/products/' + product_handle + '.js', function (product) {
      
      //console.log(product);

      var title = product.title;

      var type = product.type;

      var price = 0;

      var original_price = 0;

      var desc = product.description;

      var images = product.images;

      var variants = product.variants;

      var options = product.options;

      var url = '/products/' + product_handle;

      $('.qv-product-title').text(title);

      $('.qv-product-type').text(type);
		
      $('.qv-rating-holder').html(rating);
      
      //$('.qv-product-description').html(desc.replace(/(<([^>]+)>)/gi, "").substring(0,100)+'...');

      $('.view-product').attr('href', url);

      var imageCount = $(images).length;
      //console.log(product.media);
      
      
      
//        $(product.media).each(function (i, image) {

//         if (i == imageCount - 1) {

// //           var image_embed = '<div><img src="' + image + '" data-color=""></div>';

// //           image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');

// //           $('.qv-product-images').append(image_embed);
// console.log(image.src);
//           console.log(image.alt);
 
          
           
          

// //           $('.qv-product-images').slick({

// //             'dots': false,

// //             'arrows': false,

// //             'respondTo': 'min',

// //             'useTransform': false

// //           }).css('opacity', '1');

 

//         } else {

// //           image_embed = '<div><img src="' + image + '"></div>';

// //           image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');

// //           $('.qv-product-images').append(image_embed);

//         }

//       });
      
      

      $(product.media).each(function (i, image) {

        if (i == imageCount - 1) {

          var image_embed = '<div  data-color="'+image.alt+'"><img src="' + image.src + '"></div>';

          image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');

          $('.qv-product-images').append(image_embed);

 
          
           
          

//           $('.qv-product-images').slick({

//             'dots': false,

//             'arrows': false,

//             'respondTo': 'min',

//             'useTransform': false

//           }).css('opacity', '1');

 

        } else {

          image_embed = '<div  data-color="'+image.alt+'"><img src="' + image.src + '"></div>';

          image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');

          $('.qv-product-images').append(image_embed);

        }

      });
      
 		$(product.media).each(function (i, image) {

        if (i == imageCount - 1) {

          var image_embed = '<div class="tpvitem"  data-color="'+image.alt+'"><img src="' + image.src + '"></div>';

          image_embed = image_embed.replace('.jpg', '_200x.jpg').replace('.png', '_200x.png');

          $('.qv-product-thumbimages').append(image_embed);

 

//           $('.qv-product-thumbimages').slick({

//             'dots': false,

//             'arrows': true,
//              'slidesToShow': 4,
//             'slidesToScroll': 1,

//             'respondTo': 'min',

//             'useTransform': false

//           }).css('opacity', '1');

 

        } else {

          image_embed = '<div  data-color="'+image.alt+'"><img src="' + image.src + '"></div>';

          image_embed = image_embed.replace('.jpg', '_200x.jpg').replace('.png', '_200x.png');

          $('.qv-product-thumbimages').append(image_embed);

        }

      });
      
      
      
      $('.qv-product-images').slick({
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.qv-product-thumbimages'
      });

      $('.qv-product-thumbimages').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.qv-product-images',
        dots: false,
        arrows: true,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
      });

      
      
      
      
      
          //console.log(filter);
//           $(".qv-product-images, .qv-product-thumbimages").slick('slickUnfilter');
//           $(".qv-product-images, .qv-product-thumbimages").slick('slickFilter',$('.slick-slide[data-color="'+filter+'"]'));
//           $(".qv-product-images, .qv-product-thumbimages").slick('refresh');

      $(options).each(function (i, option) {
        
        //console.log(variants);
        
		
        var opt = option.name;

        var selectClass = '.option.' + opt.toLowerCase();
        
			$('.qv-product-options').append('<div class="option-selection-' + opt.toLowerCase() + '"><span class="option">' + opt + '</span><select class="option-' + i + ' option ' + opt.toLowerCase().replace(/ /g, "-").replace(/[\(\)]/g, "") + '"></select></div>');
       
        
        //var result = replaceSpace.replace(/ /g, ";");
        //alert('.option.' + opt.toLowerCase().replace(/ /g, "-").replace(/[\(\)]/g, ""));
        $(option.values).each(function (i, value) {
          
          if(opt.toLowerCase().replace(/ /g, "-").replace(/[\(\)]/g, "") == 'color'){
            
           // $('.qv-product-options').append('<div class="option-selection-' + opt.toLowerCase() + ' qvprdswatch"><span class="option">' + opt + '</span></div>');

            
            //console.log(variants);
            $(variants).each(function (j, variant) {
              
              //console.log(variant);
          	 //console.log(variant.option1);
          //console.log(option.name);
                  if(variant.option1==value){
                    varimg = variant.featured_image.src;

                  }
               });
            //console.log(varimg);
            if(i==0){$('.qvprdswatch').append('<span class="qvprdswatchitem sxqv_active"><img src="'+varimg+'" value="' + value + '"></span>');}else{
            $('.qvprdswatch').append('<span class="qvprdswatchitem"><img src="'+varimg+'" value="' + value + '"></span>');
            }
          	$('.option.' + opt.toLowerCase().replace(/ /g, "-").replace(/[\(\)]/g, "")).append('<option value="' + value + '">' + 'color-'+value + '</option>');

          }else{
			
          	$('.option.' + opt.toLowerCase().replace(/ /g, "-").replace(/[\(\)]/g, "")).append('<option value="' + value + '">' + value + '</option>');
          }
        });

      });
      
      var filter = $('.sxqv_active img').attr('value');
      console.log(filter);
          $(".qv-product-images, .qv-product-thumbimages").slick('slickUnfilter');
          $(".qv-product-images, .qv-product-thumbimages").slick('slickFilter',$('.slick-slide[data-color="'+filter+'"]'));
          $(".qv-product-images, .qv-product-thumbimages").slick('refresh');
      
      $('.qv-product-thumbimages .slick-slide').css('width','76px');
      $('.qv-product-thumbimages .slick-slide').css('height','40px');
      
      $('.qvprdswatch .qvprdswatchitem img').click(function(){
    	optvalsw = $(this).attr('value');
        $('.qvprdswatchitem').removeClass('sxqv_active');
        //console.log(optvalsw);
         $('.option.color option').val(optvalsw);
        $(this).parent('.qvprdswatchitem').addClass('sxqv_active');
		
        var filter = $('.sxqv_active img').attr('value');
      console.log(filter);
          $(".qv-product-images, .qv-product-thumbimages").slick('slickUnfilter');
          $(".qv-product-images, .qv-product-thumbimages").slick('slickFilter',$('.slick-slide[data-color="'+filter+'"]'));
          $(".qv-product-images, .qv-product-thumbimages").slick('refresh');
      
      $('.qv-product-thumbimages .slick-slide').css('width','76px');
      $('.qv-product-thumbimages .slick-slide').css('height','40px');
        
      
    });
      
      
//       function filtermainGallery(){
//         //alert();
//         setTimeout(function(){
//           var filter = $('.option.color option').val();
//           //alert(filter);
//           $(".qv-product-images, .qv-product-thumbimages").slick('slickUnfilter');
//           $(".qv-product-images, .qv-product-thumbimages").slick('slickFilter',$('.slick-slide[data-color="'+filter+'"]'));
//           $(".qv-product-images, .qv-product-thumbimages").slick('refresh');
//         }, 100);
//       }
//       $(document).ready(function(){
//         filtermainGallery();

//         $('.qvprdswatch .qvprdswatchitem img').click(function(e){
//           //alert();
//           filtermainGallery();
//         });

//       });
      
      
      
      

      $(product.variants).each(function (i, v) {

        if (v.inventory_quantity == 0) {

          $('.qv-add-button').prop('disabled', true).val('Sold Out');

          $('.qv-add-to-cart').hide();

          $('.qv-product-price').text('Sold Out').show();

          return true

        } else {

          price = parseFloat(v.price / 100).toFixed(2);

          original_price = parseFloat(v.compare_at_price / 100).toFixed(2);

          $('.qv-product-price').text('RS. ' + price);

          if (original_price > 0 && price < original_price) {

            $('.qv-product-original-price').text('RS. ' + original_price).show();

          } else {

            $('.qv-product-original-price').hide();

          }

          $('select.option-0').val(v.option1);

          $('select.option-1').val(v.option2);

          $('select.option-2').val(v.option3);

          return false

        }

      });

    });

 

    $(document).on("change", "#quick-view select", function () {

      var selectedOptions = '';

      $('#quick-view select').each(function (i) {

        if (selectedOptions == '') {

          selectedOptions = $(this).val();

        } else {

          selectedOptions = selectedOptions + ' / ' + $(this).val();

        }

      });

      jQuery.getJSON('/products/' + product_handle + '.js', function (product) {

        $(product.variants).each(function (i, v) {

          if (v.title == selectedOptions) {

            var price = parseFloat(v.price / 100).toFixed(2);

            var original_price = parseFloat(v.compare_at_price / 100).toFixed(2);

            var v_qty = v.inventory_quantity;

            var v_inv = v.inventory_management;

            $('.qv-product-price').text('RS. ' + price);

            $('.qv-product-original-price').text('RS. ' + original_price);

            if (v_inv == null) {

              $('.qv-add-button').prop('disabled', false).val('Add to Cart');

            } else {

              if (v.inventory_quantity < 1) {

                $('.qv-add-button').prop('disabled', true).val('Sold Out');

              } else {

                $('.qv-add-button').prop('disabled', false).val('Add to Cart');

              }

            }

          }

        });

      });

    });

    $.fancybox({

      href: '#quick-view',

      maxWidth: 1040,

      maxHeight: 600,

      fitToView: true,

      width: '75%',

      height: '70%',

      autoSize: false,

      closeClick: false,

      openEffect: 'none',

      closeEffect: 'none',

      'beforeLoad': function () {

        var product_handle = $('#quick-view').attr('class');

        $(document).on("click", ".qv-add-button", function () {

          //console.log('Quick view button clicked');
          var qty = $('.qv-quantity').val();

          var selectedOptions = '';

          var var_id = '';

          $('#quick-view select').each(function (i) {

            if (selectedOptions == '') {

              selectedOptions = $(this).val();

            } else {

              selectedOptions = selectedOptions + ' / ' + $(this).val();

            }

          });
		
          let rev = $('.qv-rating-holder .jdgm-prev-badge')[0].dataset;
          let no_of_rev = rev.numberOfReviews;
          no_of_rev = parseFloat(no_of_rev);
          let avg_rate = rev.averageRating;
          avg_rate = parseFloat(avg_rate);
          jQuery.getJSON('/products/' + product_handle + '.js', function (product) {

            $(product.variants).each(function (i, v) {
			  //console.log('details',v);
              if (v.title == selectedOptions) {

                var_id = v.id;
                let prod_id = v.featured_image.product_id;
                
//                 console.log('no_of_rev',no_of_rev);
                //prod_id = 456316420134;
//                 no_of_rev = 2;
//                 avg_rating = 4;
                
                console.log('=============================================');
    			console.log('=========In QuickView.js============');
                console.log('product handle : ',product_handle);
                console.log('variant id : ',var_id);
                console.log('product id : ',prod_id);
                console.log('no_of_rev : ',no_of_rev);
                console.log('avg_rate : ',avg_rate);
                console.log('=============================================');
                processCart();
				newAddToCart(prod_id, product_handle,var_id,no_of_rev,avg_rate);
              }

            });

          });

          function processCart() {

            jQuery.post('/cart/add.js', {

              quantity: qty,

              id: var_id

            },

                        null,

                        "json"

                       ).done(function () {

              $('.qv-add-to-cart-response').addClass('success').html('<span>' + $('.qv-product-title').text() + ' has been added to your cart. <a href="/cart">Click here to view your cart.</a>');

              document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
                bubbles: true
              }));
            })

            .fail(function ($xhr) {

              var data = $xhr.responseJSON;

              $('.qv-add-to-cart-response').addClass('error').html('<span><b>ERROR: </b>' + data.description);

            });

          }

        });

        $('.fancybox-wrap').css('overflow', 'hidden !important');

      },

      'afterShow': function () {

        $('#quick-view').hide().html(content).css('opacity', '1').fadeIn(function () {

          $('.qv-product-images').addClass('loaded');
          $('.qv-product-thumbimages').addClass('loaded');
			
        });

      },

      'afterClose': function () {

        $('#quick-view').removeClass().empty();

      }

    });
 }, 200);
  });


};

 

$(window).resize(function () {

  if ($('#quick-view').is(':visible')) {

    $('.qv-product-images').slick('setPosition');

  }

});

 

