<template>
<div>
  <h1 v-show="false" >Menuiserie Aluminium à Essaouira - Maroc | Moga-menuisier.com</h1>
<TheCarousel />
<TheOurServices id="nos_services" />
<TheAboutUs id="a_propos" />
<TheContactForm id="contact" />
<!-- <TheNumbers /> -->
</div>
</template>

<script>
import TheCarousel from '~/components/TheCarousel'
import TheOurServices from '~/components/TheOurServices'
import TheAboutUs from '~/components/TheAboutUs'
import TheContactForm from '~/components/TheContactForm'
import TheNumbers from '~/components/TheNumbers'

export default {
  name:"index",
  components:{
    TheCarousel,
    TheOurServices,
    TheAboutUs,
    TheNumbers,
    TheContactForm
  },
  data() {
    return {
      breadcrumbs: [
        {
          url: 'https://example.com',
          text: 'top page',
        },
        {
          url: 'https://example.com/foo',
          text: 'foo',
        },
        {
          url: 'https://example.com/foo/bar',
          text: 'bar',
        },
      ],
    };
  },
  // jsonld() {
  //   const items = this.breadcrumbs.map((item, index) => ({
  //     '@type': 'ListItem',
  //     position: index + 1,
  //     item: {
  //       '@id': item.url,
  //       name: item.text,
  //     },
  //   }));
  //   return {
  //     '@context': 'http://schema.org',
  //     "@graph": 
  //           [
  //              {
  //                   "@type": "WebPage",
  //                   "name": this.$store.state.pages.item.metaTitle,
  //                   "description": this.$store.state.pages.item.metaDescription
  //               },
  //               {
  //                   "@type": "LocalBusiness",
  //                   "image": [
  //                               primaryImageUrl,
  //                               secondaryImageUrl
  //                               ],
  //                   "address": {
  //                       "@type": "PostalAddress",
  //                       "addressLocality": this.$store.state.organization.item.addresses[0].country,
  //                       "addressRegion": this.$store.state.organization.item.addresses[0].city,
  //                       "streetAddress": this.$store.state.organization.item.addresses[0].address
  //                   },
  //                   "description": this.$store.state.organization.item.description,
  //                   "name": this.$store.state.organization.item.name,
  //                   "telephone": this.$store.state.organization.item.phone,
  //                   "priceRange":"25$"
  //               },
  //               {
  //                 '@type': 'BreadcrumbList',
  //                 itemListElement: items,
  //               }
  //           ]
  //   };
  // },

}
</script>
