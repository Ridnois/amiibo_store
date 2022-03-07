import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { AmiiboCard, AmiiboCollection } from '../components'
import { getAmiiboCollection } from '../features/amiiboStore/amiiboActions'
import { RootState } from '../features/store'
import { useAppDispatch, useAppSelector } from '../hooks'
import styles from '../styles/Amiibo.module.css'

const getStoreCollection = (collection: string) => (state: RootState) => state.amiiboStore.collections[collection];

const AmiiboStore: NextPage = () => {
  const dispatch = useAppDispatch()
  const zelda = useAppSelector(getStoreCollection('legend+of+zelda'))
  const smashBros = useAppSelector(getStoreCollection('0x00'))
  const pokemon = useAppSelector(getStoreCollection('pokemon'))
  
  useEffect(() => {
    dispatch(getAmiiboCollection('legend+of+zelda'))
    dispatch(getAmiiboCollection('0x00'))
    dispatch(getAmiiboCollection('pokemon'))
  }, [])
  
  useEffect(() => {
    console.log(zelda)
  }, [zelda])
  return (
    <div className={styles['amiibo-store']}>
      <Head>
        <title>Amiibo store</title>
      </Head>
      <div className={styles['amiibo-nav']}>
        <div className={styles['amiibo-logo']}>
          <img alt={`amiibos logo`} width="100%" className={styles['amiibo-logo__img']} src='/logo-amiibo-glow.png'/>
          <p className={styles['amiibo-logo__store']}>Store</p>
        </div>
        <p className={styles['amiibo-cart']}>
          Cart
        </p>
      </div>
       { zelda && <AmiiboCollection title="Legend of zelda" collection={(zelda as any)}/> }
       { smashBros && <AmiiboCollection title="Super smash bros" collection={(smashBros as any)}/> }
       { pokemon && <AmiiboCollection title="Pokemon" collection={(pokemon as any)}/> }
      </div>
  )
}

export default AmiiboStore;
