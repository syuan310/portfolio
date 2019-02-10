// isotope click function
        $(".gallery-menu  button").on('click', function(e) {
            e.preventDefault();
            $(".gallery-menu ul li button").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');


            switch($(this).html()) {
                case "Web/APP":
                    // alert("1");
                    $("div .gallery-item ").find(".Web-APP").show();
                    $("div .gallery-item ").find(".Visual-Design").hide();
                    $("div .gallery-item ").find(".Illustration").hide();
                    
                break;
                case "Visual Design":
                    $("div .gallery-item ").find(".Web-APP").hide();
                    $("div .gallery-item ").find(".Visual-Design").show();
                    $("div .gallery-item ").find(".Illustration").hide();
                break;
                case "Illustration":
                    $("div .gallery-item ").find(".Web-APP").hide();
                    $("div .gallery-item ").find(".Visual-Design").hide();
                    $("div .gallery-item ").find(".Illustration").show();
                break;
                case "All":
                // code block
                    $("div .gallery-item ").find(".Web-APP").show();
                    $("div .gallery-item ").find(".Visual-Design").show();
                    $("div .gallery-item ").find(".Illustration").show();
                break;   
              default:
                // code block
            }

            // $(".gallery").isotope({
            //     filter: selector,
            //     animationOptions: {
            //         duration: 750,
            //         easing: 'linear',
            //         queue: false,
            //     }
            // });
            // alert("123");
            return false;
        });

        // $(".gallery").isotope({
        //     itemSelector: '.gallery-item',
        //         percentPosition: true,
        // });
        // alert("123");