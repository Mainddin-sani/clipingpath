<!-- first footer start -->
<section class="ic-footer-main-wrap ic-pt-80 ic-pb-80">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="ic-footer-link">
                    <h6>CLIPPING PATH QUICK</h6>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Our Service</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="ic-footer-link">
                    <h6>HELPS</h6>
                    <ul>
                        <li>
                            <a href="#">Support Center</a>
                        </li>
                        <li>
                            <a href="#"> How It Work</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="ic-footer-link">
                    <h6>TOOLS
                    </h6>
                    <ul>
                        <li>
                            <a href="#">Login</a>
                        </li>
                        <li>
                            <a href="#">Registration</a>
                        </li>
                        <li>
                            <a href="#">Corporate</a>
                        </li>
                        <li>
                            <a href="#">Free Trial</a>
                        </li>
                        <li>
                            <a href="#">Get a Quote
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="ic-footer-link">
                    <h6>ABOUT US</h6>
                    <a href="#">
                        <img src="assets/images/google-play-store.png" alt="">
                    </a>
                    <a href="#">
                        <img src="assets/images/comoodo-ssl.png" alt="">
                    </a>
                </div>

            </div>
        </div>
        <div class="row ic-mt-40">
            <div class="col-lg-6">
                <img src="assets/images/payment-method.png" class="img-fluid" alt="">
            </div>
            <div class="col-lg-6">
                <div class="ms-social-link">
                    <ul>
                        <li>
                            <a href="#"><i class="icofont-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="icofont-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="icofont-brand-youtube"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="icofont-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="icofont-pinterest"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- first footer end -->

<!--  last-footer Start -->
<section class="ic-last-footer">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="ic-footer-link-last-footer">
                    <ul>
                        <li>
                            <a href="#">Terms & Conditions </a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">RSS Feed</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="ic-copyright-text text-right">
                    <p>©Copyright 2021 <span>Cliping Path</span>. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!--  last-footer end -->

<!-- <a href="#" class="ic-back-to-top">
    <img src="assets/images/up.svg" alt="arrow">
</a> -->

<!-- <script src="assets/js/jquery-3.6.0.min.js"></script> -->
<script src="assets/js/vendor.js"></script>
<script src="assets/js/custom.js"></script><!-- custom js -->
<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyB1taAMFjjJDItj7VVzlvsTvVrixJHHNqc&callback=initMap&libraries=places"></script>
<script>
    new WOW().init();
    // map
    var map;
    var geocoder;

    function loadMap() {
        // Using the lat and lng of Dehradun.
        var latitude = '23.868209894441975';
        var longitude = '90.41491927636815'
        var latlng = new google.maps.LatLng(latitude, longitude);
        var feature = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), feature);
        geocoder = new google.maps.Geocoder();
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Test for Location"
        });

    }
</script>

</body>

</html>