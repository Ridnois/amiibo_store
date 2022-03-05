import type { NextPage } from 'next'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getZelda, selectZelda } from '../store'
import { useEffect, useState } from 'react'
import styles from '../styles/Amiibo.module.css'

interface IAmiibo {
  amiiboSeries: string;
  gameSeries: string;
  image: string;
  name: string;
  character: string;
  type: string;
}

const AmiiboCard: React.FC<IAmiibo> = (props) => {
  return (
    <div className={styles['amiibo-card']}>
      <div className={styles['amiibo-card__header']}>
        <h3 className={styles['amiibo-card__type']}>{props.type}</h3>
      </div>
      <div className={styles['amiibo-card__img-container']}>
        <img className={styles['amiibo-card__image']} alt={props.character} src={props.image} />
      </div>
      <div className={styles['amiibo-card__content']}>
        <h3 className={styles['amiibo-card__character']}>{props.character}</h3>
        <h4 className={styles['amiibo-card__series']}>{props.amiiboSeries}</h4>
      </div>
    </div>
    
  )
}

const AmiiboStore: NextPage = () => {
  const dispatch = useAppDispatch()
  const { amiibos, pending, error } = useAppSelector(selectZelda)
  useEffect(() => {
    dispatch(getZelda())
  }, [])

  useEffect(() => {
    console.log(amiibos)
  }, [amiibos])
  return (
    <div className="amiibo-store">
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
      {amiibos && amiibos.map((amiibo) => (
        <AmiiboCard {...amiibo}/>
      ))}
    </div>
  )
}

export default AmiiboStore;
