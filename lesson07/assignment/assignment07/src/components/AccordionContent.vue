<template>
  <!-- had to rewrite elements to get bootstrap working -->
  <b-accordion id="accordion-container" :active-item="activeSectionIndex">

    <!-- looping through sections -->
    <b-card v-for="(section, index) in sections" :key="index">

      <!-- card header toggles content -->
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="section.id" variant="link" :aria-expanded="index === activeSectionIndex ? 'true' : 'false'">
          {{ section.header }} <!-- Display the section header -->
        </b-button>
      </b-card-header>

      <!-- collapsible content -->
      <b-collapse :id="section.id" :visible="index === activeSectionIndex" :accordion="accordion-container" role="tabpanel">
        <b-card-body>
          <b-card-title>{{ section.title }}</b-card-title>
          <b-card-text>{{ section.content }}</b-card-text>
        </b-card-body>
      </b-collapse>

    </b-card>
  </b-accordion>
</template>

<script>
export default {
  name: 'AccordionContent',
  props: {
    msg: String
  },
  data() {
    return {
      // default first card to expanded content
      activeSectionIndex: 0,
      // data for use with the accordion
      sections: [
        {
          id: 'collapseOne',
          header: 'Goldfish Wonderland Section',
          title: 'Goldfish Wonderland',
          content: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
        },
        {
          id: 'collapseTwo',
          header: 'Wishful Drinking Section',
          title: 'Wishful Drinking',
          content: 'Tuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        },
        {
          id: 'collapseThree',
          header: 'Hotel Illusion Section',
          title: 'Hotel Illusion',
          content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.'
        }
      ]
    };
  },
  methods: {
    // toggles section for visibility
    toggleSection(index) {
      this.activeSectionIndex = this.activeSectionIndex === index ? null : index;
    }
  }
}
</script>
