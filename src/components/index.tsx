import React from 'react';
import type { IAmiiboCollection, IAmiibo } from '../types'
import styles from '../styles/Amiibo.module.css'

export const AmiiboCard: React.FC<IAmiibo> = (props) => {
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


export const AmiiboCollection: React.FC<IAmiiboCollection> = ({ collection, title }) => {
   
  return (
    <React.Fragment>
      <h3 className={styles['amiibo-collection__title']}>{title}</h3>
      <div className={styles['amiibo-collection']}>
        <div className={styles['amiibo-collection__gallery']}>
        { collection && collection.map((element: IAmiibo) => (
          <AmiiboCard key={element.name} {...element}/>
        )) }
      </div>
    </div>
    </React.Fragment>
  )
}
