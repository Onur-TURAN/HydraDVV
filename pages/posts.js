import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/youtube-how-to-build-portfolio.jpg'
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg'
import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popüler Gönderiler
      </Heading>

      <Heading as="h3" fontSize={20} mb={4}>
      ----------  ----------
      </Heading>

      <Heading as="h3" fontSize={20} mb={4}>
        Yakında!
      </Heading>


    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
