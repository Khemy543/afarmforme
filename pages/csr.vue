<template>
  <div>
    <div class=" max-w-7xl mx-auto px-4 pt-48 ">
      <div class="text-lg lg:text-xl font-bold text-center">
        Corporate<br />Social<br />Responsibility.
      </div>

      <div class="relative w-full mt-40 lg:mt-72">
        <img src="~/static/img/csr/csr-hero.png" alt="hero" class="w-full">
      </div>
    </div>
    <div class=" max-w-4xl mx-auto px-4">
      <div class=" text-base font-bold text-center lg:px-24 mt-32">
        Our Corporate Social Responsibility cuts across
        <span class=" text-primary">everyone</span> and
        <span class=" text-blue-200">everything</span>
        we get in touch with.
      </div>
      <div class=" text-xs mt-32">
        We are a company that believes in doing the right business, in the right
        way. Everything we do as a company has an impact on society, the economy
        and the environment. However, this impact is more than we think.
        Corporate social responsibility forms an integral part of our
        sustainability strategy, which underpins most of our decisions we make
        for our businesses.
        <br />
        <br />
        Our corporate social responsibility cuts across everyone and everything
        we get in touch with. Thus from our employees to suppliers, and clients
        to the communities in which we operate in. We want to ensure we sustain
        safe operations, have a positive and supportive impact on our employees,
        the communities we work in and the wider environment, and ensuring we
        continually strive to build the trust and respect our clients.
        <br />
        <br />
        We have a long-term corporate social responsibility objective, which is
        to impact, and improve the quality of life of the individuals in the
        communities we operate in through our special initiatives. We want to
        ensure that the people within communities in which we operate in are
        educated, are of good health, practicing good sanitation and are given
        maximum protection.
      </div>
    </div>

    <div class=" mt-36 w-full py-36 bg-teal-900">
      <div class=" max-w-md mx-auto text-center">
        <div class=" text-lg font-bold text-white text-center">
          Our CSR Principles
        </div>
        <div class="text-xs font-normal text-white">
          Our company has principles of corporate responsibility, adopted by the
          board to focus on the issues of particular significance to our
          business and communities we operate in.
        </div>
      </div>

      <div class=" mx-auto max-w-4xl mt-14 px-4 lg:px-0">
        <div class=" w-full grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-4">
          <div>
            <div class=" w-full bg-gray-100 rounded-xl overflow-hidden">
              <div class=" text-sm mb-3 font-bold px-6 pt-6">The Environment</div>
              <div class=" text-xxs px-6 pb-6">
                As a company, we are aware of the scale of impact our operations
                have on the environment. As such, we are committed to exploring
                ways of reducing the impact of what we do. Therefore, we will
                take a responsible attitude and lead the way in developing
                initiatives such as planting more trees, and using good farming
                methods to further improve our environment footprint.
              </div>
              <img
                src="~/static/img/csr/environment.png"
                alt="Enviromnent"
                class=" h-80"
              />
            </div>
          </div>
          <div>
            <div class=" w-full bg-gray-100 rounded-xl overflow-hidden">
              <div class=" text-sm mb-3 font-bold px-6 pt-6">
                Quality Services And Produce
              </div>
              <div class=" text-xxs px-6 pb-6">
                We are committed to establishing mutually beneficial relations
                with our clients. We honour and enforce the terms of contract to
                which we commit. All of our employees share a responsibility for
                ensuring that the relationship we have with our clients are
                conducted with high standards of honesty, integrity, openness
                and professionalism. The needs of our clients remain our first
                consideration, and understanding these requirements ensure that
                we are able to develop and deliver solutions which are built
                around our clients’ specific needs.
              </div>
              <img src="~/static/img/csr/service.png" alt="Service" 
                class=" h-80"/>
            </div>
          </div>
          <div class=" -mt-8">
            <div class=" w-full bg-gray-100 rounded-xl overflow-hidden">
              <div class=" text-sm mb-3 font-bold px-6 pt-6">Communities</div>
              <div class=" text-xxs px-6 pb-6">
                Our company wants to make realistic and lasting differences in
                the communities in which we operate. Our community based
                initiatives matter to us because we employ the local people and
                serve local businesses and individuals. We want to create
                lasting social and economic benefits for these communities and
                engage with them to earn their respect and trust. We have chosen
                to focus on putting up infrastructure such as libraries, skills
                acquisition and development centres, community warehouses etc.
                We have collaborated with other NGO’s to provide health, and
                educational services to the communities in which we operate.
              </div>
              <img
                src="~/static/img/csr/communites.png"
                alt="Community"
                class=" h-80"
              />
            </div>
          </div>
          <div>
            <div class=" w-full bg-gray-100 rounded-xl overflow-hidden">
              <div class=" text-sm mb-3 font-bold px-6 pt-6">The Workplace</div>
              <div class=" text-xxs px-6 pb-6">
                We expect all of our employees to use their best endeavours to
                deliver our company’s goals. On that note, we aim to create,
                develop and lead highly motivated teams who have up to date
                competencies and skills and believe in our company’s values. We
                recruit, employ, promote and reward based on an individual’s
                ability to do the job and we are committed to develop and
                enhance each employee’s skills and capabilities to our mutual
                benefits.
              </div>
              <img
                src="~/static/img/csr/office.png"
                alt="The workplace"
                class=" h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      principles: [
        {
          id: 1,
          title: "The Environment",
          description:
            "As a company, we are aware of the scale of impact our operations have on the environment. As such, we are committed to exploring ways of reducing the impact of what we do. Therefore, we will take a responsible attitude and lead the way in developing initiatives such as planting more trees, and using good farming methods to further improve our environment footprint.",
          image: ""
        },
        {
          id: 2,
          title: "Quality Services And Produce",
          description:
            "We are committed to establishing mutually beneficial relations with our clients. We honour and enforce the terms of contract to which we commit. All of our employees share a responsibility for ensuring that the relationship we have with our clients are conducted with high standards of honesty, integrity, openness and professionalism. The needs of our clients remain our first consideration, and understanding these requirements ensure that we are able to develop and deliver solutions which are built around our clients’ specific needs.",
          image: ""
        },
        {
          id: 3,
          title: "Communities",
          description:
            "Our company wants to make realistic and lasting differences in the communities in which we operate. Our community based initiatives matter to us because we employ the local people and serve local businesses and individuals. We want to create lasting social and economic benefits for these communities and engage with them to earn their respect and trust. We have chosen to focus on putting up infrastructure such as libraries, skills acquisition and development centres, community warehouses etc. We have collaborated with other NGO’s to provide health, and educational services to the communities in which we operate.",
          image: ""
        },
        {
          id: 4,
          title: "The Workplace",
          description:
            "We expect all of our employees to use their best endeavours to deliver our company’s goals. On that note, we aim to create, develop and lead highly motivated teams who have up to date competencies and skills and believe in our company’s values. We recruit, employ, promote and reward based on an individual’s ability to do the job and we are committed to develop and enhance each employee’s skills and capabilities to our mutual benefits.",
          image: ""
        }
      ]
    };
  }
};
</script>
<style scoped>
.round {
  border-radius: 15px;
}
</style>
