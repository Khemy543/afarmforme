<template>
  <div class="pb-10">
    <div class="container px-32 mx-auto flex flex-wrap items-center justify-between">
    <!-- main section -->
      <div class=" grid grid-cols-2 h-screen overflow-x-hidden ">

        <div class="flex justify-center items-center">
          <div class="">
            <h1 class=" text-black big-text mb-14">
              The future of investment.
            </h1>
            <p class="text-color">Sit home, watch us dirty our hands, enjoy your profits</p>
            <div class="flex mt-14">
              <button class="app-button mr-10">Get started</button> <p class="read-more">Read more</p>
            </div>
          </div>
        </div>

        <div>
          <img class="image-banner" src="~static/img/home-one/main-banner-edited.png" alt="image">
        </div>
      </div>
      <!-- end main section -->
    </div>

    <div class="px-72 section-padding">
        <div class=" text-center">
          <h3>New <span>opportunities.</span></h3>
          <p>All these years, individuals have always wanted to venture into agriculture, but barriers such as lack of technical knowledge, access to land, inadequate finance and unavailability of produce off takers etc have prevented such people. <b>A farm for me</b> has removed such barriers by way of :</p>
        </div>

        <div class=" mt-28 grid grid-cols-2 gap-5">

          <div>
            <img src="~/static/img/summary/1.png" />
          </div>
          <div class=" flex justify-center items-center">
            <div>
              <h4 class=" mt-8">Technology</h4>
              <p>Taking maximum advantage of technology to sponsor farms and earn very cool returns without a physical involvement.</p>
            </div>
          </div>

          <div class=" flex justify-center items-center">
            <div>
              <h4 class=" mt-48">Partnerships</h4>
              <p>Fostering partnerships with farmers and necessary stakeholder we trust to run activities on our farms.</p>
            </div>
          </div>
          <div>
            <img src="~/static/img/summary/2.png" />
          </div>

          <div>
            <img src="~/static/img/summary/3.png" />
          </div>
          <div class=" flex h-full items-center">
            <div>
              <h4 class=" mt-48">Analytics</h4>
              <p>Researching, analysing and gathering industry data helps drive higher returns on your investments.</p>
            </div>
          </div>

        </div>


        <div class="section-padding">
           <h3 class="text-center">Our <span>farms.</span></h3>
           <p class="text-center">All farms are automatically insured.</p>

           <div class=" medium-padding grid grid-cols-3 gap-10">
             <ProductCard 
                    v-for="n in 3" :key="n"
                />
           </div>

           <div class="medium-padding text-center">
              <button class="app-button">Browse more farms</button>
           </div>

           <div class=" medium-padding grid grid-cols-2 gap-5">
             <div class=" px-20 py-10 brown-card">

               <img src="~/static/img/blog/safe-and-secure-icon.png" />
               <h4 class=" small-padding">Transparent</h4>
               <p class=" mt-5">We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.</p>

             </div>
             
             <div class=" px-20 py-10 voilet-card">
               <img src="~/static/img/blog/transparent-icon.png" />
               <h4 class=" small-padding">Safe and secured</h4>
               <p class=" mt-5">Your cards and other personal data are protected with an AES-256 bit encryption to ensure that your data doesn’t get into the wrong hands.</p>
             </div>
           </div>
        </div>
    </div>

    <div class="medium-padding">
      <div class="green-card grid grid-cols-2 gap-5 py-16 px-72">
          <div>
            <h3>Risk less; Earn more with our <span>diversified portfolio packages.</span></h3>
          </div>
          <div>
            <p>
              It is important to spread your investments amongst different farms. This is because different crops may have different reactions towards the off taking market as well as different reaction towards unseen events.<br/><br/> A combination of crops will reduce your investments sensitivity to market swings. Therefore if investments are spread across different areas, unpleasant events in one crop will be redeemed by positive result of the other crop.
            </p>
            <p class=" small-padding text-primary font-semibold">View our diversified portfolio packages</p>
          </div>
      </div>
    </div>

    <div class="text-center extra-big-padding">
      <h3>We are excited <span>helping achieve the sustainable</span> development goals.</h3>
      <div class=" grid grid-cols-3 small-padding gap-14">
        <img src="~/static/img/farm/SDG-goal-01.png" />
        <img src="~/static/img/farm/SDG-goal-02.png"/>
        <img src="~/static/img/farm/SDG-goal-05.png"/>
        <img src="~/static/img/farm/SDG-goal-08.png"/>
        <img src="~/static/img/farm/SDG-goal-09.png"/>
        <img src="~/static/img/farm/SDG-goal-15.png" />
      </div>
    </div>

    <div class="medium-padding">
      <div class="gray-card grid grid-cols-2 py-16 gap-5 px-72">
          <div>
            <h3>Stay connected wherever <span>you are, whenever you want.</span></h3>
            <p class="small-padding">Download our mobile app now from any of the app stores and stay up-to-date with progress on your investments.</p>
            <div class="flex small-padding">
              <img src="~/static/img/summary/google-playstore.png"  class=" mr-5"/>
              <img src="~/static/img/summary/apple-appstore.png" />
            </div>
          </div>
          <div>
           <!--  <img src="~/stata" /> -->
          </div>
      </div>
    </div>

    <div class="medium-padding px-72">
      <h3 class=" text-center">A few nice things that our <span>customers</span> are saying <span>about us.</span></h3>
      <div class=" small-padding">
        <div class=" grid grid-cols-3 gap-14">

          <div class="gray-card pt-14 px-8 pb-1 rounded-2xl">
            <p>I invested in A poultry farm last year August. I was skeptical but when I saw my returns, I was so happy that I have decided to invest in 3 more farms and the diversified package. This is awesome and I thank the team for their 24/7 customer support.</p>
            <hr/>
            <div class="flex p-2">
              <img src="~/static/img/mgt-board/josh.jpg" class="avatar mr-4" />
              <div>
                <p>Jen Sokpoe</p>
                <p class=" text-sm">Teacher</p>
              </div>
            </div>
          </div>

          <div class="gray-card pt-14 px-8 pb-1 rounded-2xl">
            <p>I invested in A poultry farm last year August. I was skeptical but when I saw my returns, I was so happy that I have decided to invest in 3 more farms and the diversified package. This is awesome and I thank the team for their 24/7 customer support.</p>
            <hr/>
            <div class="flex p-2">
              <img src="~/static/img/mgt-board/josh.jpg" class="avatar mr-4" />
              <div>
                <p>Noah Alorwu</p>
                <p class=" text-sm">National Service Personnel</p>
              </div>
            </div>
          </div>

          <div class="gray-card pt-14 px-8 pb-1 rounded-2xl">
            <p>I invested in A poultry farm last year August. I was skeptical but when I saw my returns, I was so happy that I have decided to invest in 3 more farms and the diversified package. This is awesome and I thank the team for their 24/7 customer support.</p>
            <hr/>
            <div class="flex p-2">
              <img src="~/static/img/mgt-board/josh.jpg" class="avatar mr-4" />
              <div>
                <p>Fiifi Manaf</p>
                <p class=" text-sm">University student</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="px-72 medium-padding">
      <div class="deep-green-card px-56 py-20 text-center">
        <h4 class=" text-white">Sign up for our promotions and newsletters.</h4>

        <p class=" py-12 text-white">We may not give out a plot of land for free. But once in a while, we will be giving out discount offers and tips and tricks you don’t want to miss.</p>
        <div class="flex w-full">
          <input class="app-input w-5/6 mr-4" placeholder="Enter your email here…" />
          <button class="app-button">Send</button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  components : {
    ProductCard : () => import('~/components/ProductCard.vue')
  }
}
</script>

<style>
.brown-card {
  background: #FFE3D5 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
}

.voilet-card{
  background: #FFC9EE 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
}

.green-card {
  background: #F4FFF0 0% 0% no-repeat padding-box;
  opacity: 1;
}

.deep-green-card {
    background: transparent linear-gradient(269deg, #55893F 0%, #206E00 100%) 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 15px;
}

.extra-big-padding{
  padding: 120px 518px;
}

.read-more{
  color: #206E00;
  font-weight: 700;
}
</style>
