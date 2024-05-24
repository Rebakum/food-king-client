import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (

        <footer className="footer md:grid-cols-2 lg:grid-cols-4 grid-cols-1 p-10  text-yellow-200 bg-slate-700">
            <aside>
                <img className='w-16 rounded-full' src={logo} alt="" />
                <h1 className='rancho text-orange-700 text-5xl'>Food King</h1>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Recipes</a>
                <a className="link link-hover">Cooking Tips</a>
                <a className="link link-hover">Blog</a>
               
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
              
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        //         <footer>
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-6">
        //                 <h3>About Food Making</h3>
        //                 <p>Food Making is dedicated to providing you with delicious recipes, cooking tips, and culinary inspiration. Whether you're a seasoned chef or a novice in the kitchen, we've got something for everyone!</p>
        //             </div>
        //             <div className="col-md-3">
        //                 <h3>Quick Links</h3>
        //                 <ul>
        //                     <li><a href="#">Recipes</a></li>
        //                     <li><a href="#">Cooking Tips</a></li>
        //                     <li><a href="#">Blog</a></li>
        //                     <li><a href="#">Contact Us</a></li>
        //                 </ul>
        //             </div>
        //             <div className="col-md-3">
        //                 <h3>Follow Us</h3>
        //                 <ul className="social-icons">
        //                     <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
        //                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        //                     <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        //                     <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="footer-bottom">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-md-12">
        //                     <p>© 2024 Food Making. All rights reserved.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>

    );
};

export default Footer;