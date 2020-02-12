import React from "react";

function Footer() {
    return (
        <React.Fragment>
            <footer class=" py-2">
                <div class="container">
                <div class="row">
                    <div class="col-md-3 text-md-right text-center">
                    <img src={require("../images/footer-logo.png")} />
                    </div>
                    <div class="col-md-9 text-md-right text-center pt-2">
                    <ul class="list-unstyled mb-0">
                        <li class="list-inline-item footer-link-text mr-4">Home</li>
                        <li class="list-inline-item footer-link-text mr-4">About Us</li>
                        <li class="list-inline-item footer-link-text mr-4">Portfolio</li>
                        <li class="list-inline-item footer-link-text mr-4">Blog</li>
                        <li class="list-inline-item footer-link-text">Contact</li>
                        </ul>
                    
                    </div>
                </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;