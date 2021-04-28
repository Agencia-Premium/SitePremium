import React from 'react'
import HomeTemplate from '../Templates/Home'
import api from '../services/api'

export type HomeProps = {
  data: {
    id: number,
    title: string;
    description: string;
    image: {
      url: string;
    }
  }[]
}

export default function Home({data}: HomeProps) {
  return (
    <HomeTemplate data={data} />
  )
}

export async function getStaticProps() {
  const { data } = await api.get('/works');
  return {
    props: {
      data
    }
  }
}