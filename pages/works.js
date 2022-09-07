import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Çalışmalar
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="" title="Discord" thumbnail={thumbInkdrop}>
            Bu sunucu, genel yazılım dilleri (JS, Lua, Pythonc etc.) gibi dillerdeki çıkan sorunlara
            yardımcı olmak için kurulan bir yerdir.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id=""
            title="MTA:SA"
            thumbnail={thumbWalknote}
          >
            MTA:SA Roleplay Sunucuları ve MySQL tabanlı sistemler/altyapılar
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id=""
            title="JavaScript"
            thumbnail={thumbFourPainters}
          >
            JavaScript ile kodladığımız bazı WEB tabanlı yapılar. ( next.js )
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={4}>
          Eski Çalışmalar
        </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="" thumbnail={thumbPichu2} title="Lua for MTA:SA">
            Multi Theft Auto: San ANDREAS için kullanılan Lua (C++) tabanlı bir dil.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id=""
            thumbnail={thumbFreeDBTagger}
            title="Python"
          >
            Python ile kodladığımız basic düzeydeki oyunlar. (github.com/HydraDVV/games-py)
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
