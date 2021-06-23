<template>
    <div class="wrapper px-72 pt-28">
        <div class="grid grid-cols-4 gap-4">
            <div>
                <h4>Discover</h4>

                <ul>
                    <li>
                        Our fees
                    </li>
                    <li>
                        Download the app
                    </li>
                    <li>
                        Careers
                    </li>
                    <li>
                        How it works
                    </li>
                    <li>
                        Corporate Social Responsibility
                    </li>
                </ul>
            </div>
            <div>
                <h4>Learn more</h4>

                <ul>
                    <li>
                        Blog
                    </li>
                    <li>
                        Our farms
                    </li>
                    <li>
                        Frequently Asked Questions
                    </li>
                </ul>
            </div>
            <div>
                <h4>Customer helplines</h4>

                <ul>
                    <li>
                        +233 0000000
                    </li>
                    <li>
                        +233 0000000
                    </li>
                    <li>
                        +233 0000000
                    </li>
                </ul>
            </div>
            <div>
                <h4>Get connected</h4>

                <ul>
                    <li>
                        Facebook
                    </li>
                    <li>
                        Twitter
                    </li>
                    <li>
                        Email
                    </li>
                </ul>
            </div>

        </div>
        <h3 class=" mt-24 text-center">IF YOU ATE TODAY THANK A FARMER.</h3>
        <div class=" border-t-2 border-b-2 border-gray-300 mt-8 py-2">
            <p>By using this website, you accept our <span>Terms of Use</span> and <span>Privacy Policy</span>. Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance.</p>
        </div>

        <div class=" grid grid-cols-2 mt-8">
            <div>
                <p>Copyright 2020 A farm for me. All rights reserved.</p>
            </div>
            <div>
                <div class=" grid grid-cols-2">
                <p>Terms of Agreement</p>
                <nuxt-link to='/privacy-policy'><p>Privacy policy</p></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.wrapper {
    background: #EBEBEB 0% 0% no-repeat padding-box;
    opacity: 1;
}

h4{
    font: normal normal bold 20px/35px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
ul li{
    font: normal normal normal 18px/30px Poppins;
    letter-spacing: 0px;
    color: #2C2C2C;
    opacity: 1;
}

h3{
    font: normal normal bold 18px/40px Poppins;
    letter-spacing: 18px;
    color: #707070;
    opacity: 1;
}
p{
     text-align: center;
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
    color: #707070;
}

p span {
    color: black !important;
}
</style>