import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import React from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Merhaba, Ben Türkiye'de okuyan bir öğrenciyim!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arda Yıldız
          </Heading>
          <p>Dijital Meraklısı ( Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Hakkımda
        </Heading>
        <Paragraph>
          Arda, Türkiye/İstanbulda eğitimine devam eden ve yazılım üstüne çalışan biridir.
          Şimdiye kadar ( Lua, HTML - CSS ve JavaScript ) üzerinde küçük projeler yapmış olup,
          şuandada JavaScript üzerine çalışmaya karar vermiştir.
          full-stack bir developer olma yolunda ilerlemektedir.


          {' '}
          
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Çalışmalarım
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2009</BioYear>
          Türkiye/İstanbul'da doğdu.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          İlk Öğretim Okuluna başladı. 2018'de ilk öğretim okulundan mezun oldu.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Yazılım üzerine olan projelere/çalışmalara başladı.
        </BioSection>
        <BioSection>
          <BioYear>2022 full-stack /</BioYear>
         freelancer olma yolunda devam ediyor.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Müzik,{' '}
          Yazılım (BackEnd),   
          Tasarım (Figma),   
          Bilgisayar / Makine Mühendisliği,   
          Oyunlar / MTA:SA Sunucuları,
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Internet Uzerinde
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/HydraDVV" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @HydraDVV (GitHub)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/hydra_dv" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @hydra_dv (Twitter)
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.instagram.com/code.achievement/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Code Achievement (English)
              </Button>
            </Link>
          </ListItem>
         
          <ListItem>
            <Link href="https://instagram.com/arda.y1ldiz_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @arda.y1ldiz_ (Türkçe)
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.github.com/HydraDVV"
            title="HydraDVV / Arda Yıldız"
            thumbnail={thumbYouTube}
          >
            GitHub Hesabım (&gt;+20 Repo)
          </GridItem>
          <GridItem
            href="https://www.discord.gg/Qcuuh7uY"
            title="Discord"
            thumbnail={thumbInkdrop}
          >
            Kendime ait scripting sunucum.
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Popüler Gönderiler
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
