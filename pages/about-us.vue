<template>
    <div>
        <div class=" pt-48 max-w-7xl mx-auto px-4">
            <div class="text-lg lg:text-xl font-bold text-center">About Us.</div>
            <div class=" lg:flex lg:space-x-5 space-y-5 lg:space-y-0 mt-8">
                <div class=" w-full lg:w-1/2 lg:pl-16">
                   <p class="text-xs font-normal">A Farm For Me is an investment system of smart farming designed for persons who have interest in agriculture and want to own farms but do not have the time, lands, resources, technical knowledge etc. It is also designed for persons or individuals who are looking for investment opportunities to earn returns, which will serve as an extra source of income.
                    <br/><br/>
                    A Farm for me give individuals the opportunity to invest or sponsor our crop and animal farm units and be able to monitor farm activities through our web and mobile applications right on their smart devices at the comfort of their homes, offices or wherever they find themselves provided they have access to internet connection.
                    <br/><br/>
                    The cost of farm unit sells between GHS 1200 – GHS 6000 and a profit of 16% - 44% (GHS 264.00 - GHS 2640.00) as return on investments per cycle depending on crop and duration.
                    <br/><br/>
                    </p> 

                    <div class=" text-sm mb-3 font-bold">Our Mission</div>

                    <p class=" text-xs font-normal">
                        To promote innovations in sustainable agriculture.
                        <br/>
                        To contribute to food security and no hunger goal of the global sustainable development goals.
                        <br/>
                        Provide employment in rural communities to minimise urban migration.
                    </p>
                    <div class=" text-sm mb-3 font-bold">Our Vision</div>

                    <p class=" text-xs font-normal">
                        Farm for me is a community development driven organization, whose vision is to become one of the best agribusiness companies to improve livelihoods of rural communities through sustainable agricultural practices.
                    </p>
                    <div class=" text-sm mb-3 font-bold">Who We Are</div>

                    <p class=" text-xs font-normal">
                        We are a team of innovative entrepreneurs, passionate about improving efficiencies in agriculture and achieving sustainable goal number 1.
                    </p>
                    <div class=" text-sm mb-3 font-bold">What We Do</div>

                    <p class=" text-xs font-normal">
                        We are providing a digital platform that will give individuals the opportunity to own farm units and earn returns without being physically involved in the day-to-day activities on the farm.
                    </p>
                    
                    <div class=" text-sm mb-3 font-bold">Why We Do It</div>

                    <p class=" text-xs font-normal">
                       We believe that improving agriculture means improving society by way of ending poverty, ending hunger and causing sustainable employments.
                    </p>

                </div>
                <div class=" w-full lg:w-1/2">
                    <img src="~/static/img/about/team.png" alt="team" class=" w-full "/>
                </div>
            </div>
        </div>

        <div class=" max-w-7xl mx-auto px-4 mt-16">
            <div class="bg-teal-500 py-10 px-5 lg:px-16 rounded-xl">
                <div class=" text-base font-bold text-white">Our core values</div>

                <div class=" mt-8 grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-5">
                    <div v-for="value in core_values" :key="value.id">
                        <img :src="value.icon" :alt="value.head">
                        <div class=" text-sm mb-3 font-bold text-white">{{value.head}}</div>
                        <p class=" text-xs font-normal text-white">{{value.text}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class=" max-w-5xl mx-auto px-4 border-t border-b border-gray-300 py-20 my-20">
            <div class=" max-w-3xl mx-auto">
                <div class=" text-base font-bold text-center">Advisory & Board of directors</div>
                <p class=" text-xs font-normal text-center">Our advisory board and board of directors consist of innovative high-level personalities who support our company with their experience, their contacts and their wealth of ideas. They are executives from leading companies who offer strategic guidance and expertise on the latest advances and demands in in their industry. Our board plays an integral role in defining and directing our operations and investments strategy. They allow us to leverage opportunities and provide direct access to key decision makers within their respective markets. The strength of our board is a testament to our strong network and commitment to delivering excellence.</p>

                <div class=" mt-10 grid grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="n in 9" :key="n">
                        <div class=" rounded-lg bg-gray-100 h-48">

                        </div>
                        <div class="mt-2 text-center">
                            <div class=" text-sm mb-3 font-bold">Name</div>
                            <div class=" text-xs font-normal">Name</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class=" max-w-5xl mx-auto px-4">
            <div class=" max-w-3xl mx-auto text-center">
                <div class=" text-base font-bold">Management team</div>

                <p class=" text-xs font-normal">
                    Our ability to deliver outstanding results for our clients start with our team of smart, dedicated, innovative and capable individuals. We come from a diverse set of experiences and background that range from management to experienced farmers. As unique as we are individually, we share mutual passion for agriculture and technology and delivering excellent results for our clients and partners. We pride ourselves on our strategic, integrated approach to achieving excellence results.
                </p>
            </div>

            <div class=" mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div class=" rounded-lg h-60 overflow-hidden  relative" v-for="value in management" :key="value.id">
                    <img :src="value.image" :alt="value.name" class=" w-full h-full object-cover" />
                    <div class=" h-1/2 bg-gradient-to-t from-black absolute w-full bottom-0">
                        <div class="absolute w-full bottom-0 inset-x-0 px-2 text-white ">
                            <div class="text-xxs font-bold tracking-normal -mb-2">{{value.name}}</div>
                            <div class=" text-sm mb-3all text-white font-normal">{{value.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        Label : () => import('~/components/Label.vue')
    },
    data(){
        return{
            core_values : [
                {
                    id : 1,
                    icon : '/img/about/corporate-responsibility-icon.svg',
                    head : 'Corporate responsibility',
                    text : 'We serve and improve the communities in which we live in by supporting company sponsored community projects. We ensure the conduct of the business is a credit to the community.'
                },
                {
                    id : 2,
                    icon:"/img/about/teamwork-icon.svg",
                    head : 'Teamwork',
                    text : 'We are one company, one team. We are committed to a teamwork environment where every person is a valued member, treated with respect, encouraged to contribute, recognized, and rewarded for his or her efforts.'
                },
                {
                    id : 3,
                    icon:"/img/about/accountability-icon.svg",
                    head : 'Accountability',
                    text : 'We accept our individual and team responsibilities and we meet our commitments. We take responsibility for our performance in all of our decisions and actions.'
                },
                {
                    id : 4,
                    icon:"/img/about/partnerships-icon.svg",
                    head : 'Partnership & collaboration',
                    text : 'We pursue productive and beneficial partnerships and strategic alliance with clearly defined roles, responsibilities, governance and supportive mechanisms so as to ensure effective collaboration and synergies that have a direct bearing to the company’s mission.'
                },
                {
                    id : 5,
                    icon:"/img/about/sustainability-icon.svg",
                    head : 'Sustainability',
                    text : 'Our commitment to sustainability refers to our mindfulness of the effects of some farm practices on the environment. We therefore are committed to practicing and supporting sustainable ways of producing food.'
                },
                {
                    id : 6,
                    icon :"/img/about/customer-excellence-icon.svg",
                    head : 'Customer excellence',
                    text : 'We strive for excellence in all areas of delivery, going above and beyond to exceed our clients’ expectations. We aim to “surprise and delight” in all customer dealings and never let our customers down. We are committed to being the best we can be and go the extra mile to get the job done and give 100% in all that we do and approach everything with a “can do” spirit.'
                },
                {
                    id : 7,
                    icon:"/img/about/innovation-icon.svg",
                    head : 'Innovation',
                    text : 'We apply the creative ingenuity necessary to make us better faster first. We recognize the need for new or modified approaches and champion them, and generate ideas that go beyond the status quo.'
                },
                {
                    id : 8,
                    icon:"/img/about/integrityicon.svg",
                    head : 'Integrity',
                    text : 'We strive to do what is right always and we do what we say we will do.'
                },
            ],
            management : [
                {
                    id:1,
                    name: 'Sandra Pinto',
                    title : 'Sales',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/sandra.png"
                },
                {
                    id:2,
                    name: 'Martin Dwamena',
                    title : 'Marketing',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/martin.png"
                },
                {
                    id:3,
                    name: 'Michaela Ama Wekem',
                    title : 'Innovations',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/michaela.png"
                },
                {
                    id:4,
                    name: 'Winston Papoe',
                    title : 'Marketing',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/winston.png"
                },
                {
                    id:5,
                    name: 'Grace Afua',
                    title : 'Research & Development',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/grace.png"
                },
                {
                    id:6,
                    name:"Josh",
                    title:"Chief Technology Officer",
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/josh.png"

                },
                {
                    id:7,
                    name: 'Nana Kofi Frimpong Kyeremanteng',
                    title : 'Founder + CEO',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/nana kofi.png"
                },
                {
                    id:8,
                    name: 'Nana Akwesi Sarpong Kumankumah',
                    title : 'Sales',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/sarpong.png"
                },
                {
                    id:9,
                    name: 'Yaw Gyamfi Prempeh',
                    title : 'Business Development',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/yaw gyamfi.png"
                },
                {
                    id:10,
                    name: 'Molly Dadzie',
                    title : 'Co-Founder + Business Development',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/molly.png"
                },
                {
                    id:11,
                    name: 'Kekeli Klutse',
                    title : 'Digital lead',
                    linkedin :'',
                    twitter : '',
                    image :"/img/about/kekeli.png"
                },
            ],
            fixed : false,
            phone_fixed :false,
            phone_size:false,
            activeTab : 1
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.resize)
    },
    methods : {
        handleScroll(){
            console.log(window.top.scrollY)
            if( window.top.scrollY >= 680 && window.top.scrollY <= 7410 && this.phone_size){
                this.phone_fixed = true;
            }
            else if( window.top.scrollY >= 610 && window.top.scrollY <= 4300 && !this.phone_size){
                this.fixed = true;
            }
            else {
                this.fixed = false;
                this.phone_fixed = false;
            }
        },

        resize(){
            if(window.innerWidth < 1024){
                this.phone_size = true;
            }else{
                this.phone_size =false
            }
        },
        
    
        changeTab(id){
            this.activeTab = id
        }
    },
}
</script>
<style scoped>
body {
    scroll-behavior: smooth;
}

ul li a {
    font: normal normal normal 18px/40px Proxima Nova;
    letter-spacing: 0px;
    color: #767676;
    opacity: 1;
    @apply pr-1;
}
ul .active {
    @apply border-r-4 border-primary text-primary;
    color :#206E00 !important;
}

ul li a:active {
    font: normal normal normal 18px/40px Proxima Nova;
    letter-spacing: 0px;
    color: #206E00 !important;
    opacity: 1;
}

h5{
    font: normal normal normal 16px/25px Proxima Nova;
    letter-spacing: 0px;
    color: #2C2C2C;
    opacity: 1;
}

.fix-side {
  position: fixed;
  top: 70px;
}

.phone-fix-side {
  position: fixed;
  top: 20px;
}

@keyframes smoothScroll {
	0% {
		transform: translateY(-40px);
	}
	100% {
		transform: translateY(0px);
	}
}

</style>