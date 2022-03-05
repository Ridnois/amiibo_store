import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
  const [amiibos, setAmiibos] = useState<any[]>();
  useEffect(() => {
    fetch("http://www.amiiboapi.com/api/amiibo/?type=figure")
    .then(response => response.json())
    .then(data => setAmiibos(data.amiibo))
  }, [])
  useEffect(() => {
    console.log(amiibos)
  },[amiibos])
  return (
    <div className="amiibo-store">
      <div className={styles['amiibo-nav']}>
        <div className={styles['amiibo-logo']}>
          <img alt={`amiibos logo`} width="100%" className={styles['amiibo-logo__img']} src='/logo-amiibo-glow.png'/>
          <p className={styles['amiibo-logo__store']}>Store</p>
        </div>
        <p className={styles['amiibo-cart']}>
          Cart
        </p>
      </div>
      {amiibos && amiibos.map((amiibo) => {
        return <AmiiboCard {...amiibo}/>
      })}
    </div>
  )
}

export default AmiiboStore;
