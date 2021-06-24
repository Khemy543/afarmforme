<template>
    <div >
        <Label 
            page='about us.'
            text='The future of investment.'
        />
        <div class=" py-32 px-72 grid grid-cols-9">
            <div class=" col-span-2">
                <div  class="w-full gray-card pl-5 pt-5 pb-5">
                    <ul>
                        <li class="active">
                            <a href="#about-us">About us</a>
                        </li>
                        <li>
                            <a href="#our-missions">Our Mission</a>
                        </li>
                        <li>
                            <a href="#our-vision">Our Vision</a>
                        </li>
                        <li>
                            <a href="#who-we-are">Who We Are</a>
                        </li>
                        <li>
                            <a href="#what-we-do">What We Do</a>
                        </li>
                        <li>
                            <a href="#why-we-do-it">Why We Do It</a>
                        </li>
                        <li>
                            <a href="#core-values">Our Core Values</a>
                        </li>
                        <li>
                            <a href="#advisory-bod">Advisory & BOD</a>
                        </li>
                        <li>
                            <a href="#management-team">Management Team</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class=" col-span-7 px-12">
                <div id="about-us">
                    <h3>About us</h3>
                    <p>
                        A Farm for me is an investment system of smart farming designed for persons who have interest in agriculture and want to own farms but do not have the time, lands, resources, technical knowledge etc. It is also designed for persons or individuals who are looking for investment opportunities to earn returns, which will serve as an extra source of income.
                        <br/>
                        <br/>
                         A Farm for me give individuals the opportunity to invest or sponsor our crop and animal farm units and be able to monitor farm activities through our web and mobile applications right on their smart devices at the comfort of their homes, offices or wherever they find themselves provided they have access to internet connection. 
                         <br/>
                         <br/>
                         The cost of a farm unit sells between GHC 1200 – GHC 6000 and a profit of 16% - 44% (GHC 264.00 - GHC 2640.00) as return on investments per cycle depending on crop type and duration.
                    </p>
                </div>

                <div class=" mt-32" id="our-missions">
                    <h3>Our mission</h3>
                    <p>
                        To promote innovations in sustainable agriculture.
                        <br/>
                        To contribute to food security and no hunger goal of the global sustainable development goals.
                        <br/>
                        To provide employment in rural communities to minimise urban migration.
                    </p>
                </div>

                <div class=" mt-32" id="our-vision">
                    <h3>Our vision</h3>
                    <p>
                        Farm for me is a community development driven organization, whose vision is to become one of the best agribusiness companies to improve livelihoods of rural communities through sustainable agricultural practices.
                    </p>
                </div>

                <div class=" mt-32" id="who-are-we">
                    <h3>Who we are</h3>
                    <p>
                        We are a team of innovative entrepreneurs, passionate about improving efficiencies in agriculture and achieving the United Nations Sustainable Development Goal number 1.
                    </p>
                </div>

                
                <div class=" mt-32" id="why-we-do-it">
                    <h3>Why we do it</h3>
                    <p>
                        We believe that improving agriculture means improving society by way of ending poverty, ending hunger and causing sustainable employments.
                    </p>
                </div>

                <div class="mt-32" id="core-values">
                    <h3>Our core values</h3>
                    <div class=" grid grid-cols-3 gap-4">
                        <div class=" gray-card p-5" v-for="n in core_values" :key="n.id">
                            <h4>{{n.head}}</h4>
                            <h5> 
                               {{n.text}}
                            </h5>
                        </div>
                    </div>
                </div>

                <div class=" mt-32" id="advisory-bod">
                    <h3>Advisory and Board of Directors</h3>
                    <p>
                        Our advisory board and board of directors consist of innovative high-level personalities who support our company with their experience, their contacts and their wealth of ideas. They are executives from leading companies who offer strategic guidance and expertise on the latest advances and demands in in their industry. Our board plays an integral role in defining and directing our operations and investments strategy. They allow us to leverage opportunities and provide direct access to key decision makers within their respective markets. The strength of our board is a testament to our strong network and commitment to delivering excellence.
                    </p>
                </div>

                <div class=" grid grid-cols-4 gap-4 mt-7">
                    <div class="gray-card p-4 text-center" v-for="n in 5" :key="n">
                        <h4>First and last names</h4>
                        <p>Board Chair</p>
                    </div>
                </div>

                <div class=" mt-32" id="management-team">
                    <h3>Management team</h3>
                    <p>
                        Our ability to deliver outstanding results for our clients start with our team of smart, dedicated, innovative and capable individuals. We come from a diverse set of experiences and background that range from management to experienced farmers. As unique as we are individually, we share mutual passion for agriculture and technology and delivering excellent results for our clients and partners. We pride ourselves on our strategic, integrated approach to achieving excellence results.
                    </p>
                </div>

                <div class=" grid grid-cols-4 gap-4 mt-7">
                    <div class="gray-card p-4 text-center" v-for="n in management" :key="n.id">
                        <h4>{{n.name}}</h4>
                        <p>{{n.title}}</p>
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
                    head : 'Sustainability',
                    text : 'Our commitment to sustainability refers to our mindfulness of the effects of some farm practices on the environment. We therefore are committed to practicing and supporting sustainable ways of producing food.'
                },
                {
                    id : 2,
                    head : 'Teamwork',
                    text : 'We are one company, one team. We are committed to a teamwork environment where every person is a valued member, treated with respect, encouraged to contribute, recognized, and rewarded for his or her efforts.'
                },
                {
                    id : 3,
                    head : 'Accountability',
                    text : 'We accept our individual and team responsibilities and we meet our commitments. We take responsibility for our performance in all of our decisions and actions.'
                },
                {
                    id : 4,
                    head : 'Partnership and collaboration',
                    text : 'We pursue productive and beneficial partnerships and strategic alliance with clearly defined roles, responsibilities, governance and supportive mechanisms so as to ensure effective collaboration and synergies that have a direct bearing to the company’s mission.'
                },
                {
                    id : 5,
                    head : 'Innovation',
                    text : 'We apply the creative ingenuity necessary to make us better faster first. We recognize the need for new or modified approaches and champion them, and generate ideas that go beyond the status quo.'
                },
                {
                    id : 6,
                    head : 'Corporate responsibility',
                    text : 'We serve and improve the communities in which we live in by supporting company sponsored community projects. We ensure the conduct of the business is a credit to the community.'
                },
                {
                    id : 7,
                    head : 'Integrity',
                    text : 'We strive to do what is right always and we do what we say we will do.'
                },
                {
                    id : 8,
                    head : 'Customer excellence',
                    text : 'We strive for excellence in all areas of delivery, going above and beyond to exceed our clients’ expectations. We aim to “surprise and delight” in all customer dealings and never let our customers down. We are committed to being the best we can be and go the extra mile to get the job done and give 100% in all that we do and approach everything with a “can do” spirit.'
                }
            ],
            management : [
                {
                    id:1,
                    name: 'Nana Kofi Frimpong Kyeremanteng',
                    title : 'Founder and CEO',
                    linkedin :'',
                    twitter : ''
                },
                {
                    id:2,
                    name: 'Molly Dadzie',
                    title : 'Co founder and business development (UK)',
                    linkedin :'',
                    twitter : ''
                },
                {
                    id:3,
                    name: 'Francis Osei Kyeremanteng',
                    title : 'Chief Operations Officer',
                    linkedin :'',
                    twitter : ''
                },
                {
                    id:4,
                    name: 'Michaela Ama Wekem',
                    title : 'Director of Innovations',
                    linkedin :'',
                    twitter : ''
                },
                {
                    id:5,
                    name: 'Yvette Nuerkie Nartey',
                    title : 'Project Manager',
                    linkedin :'',
                    twitter : ''
                }
            ],
            fixed : false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },
    methods : {
        handleScroll(){
            console.log(window.top.scrollY);
            if(window.top.scrollY >= 0){
                this.fixed = true;
            }
            else{
                this.fixed = false;
            }
        }
    }
}
</script>
<style scoped>
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

ul .active a {
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

.about-fixed {
  position: fixed;
  top: 0;
  left: 0;
  animation: smoothScroll 1s forwards;
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