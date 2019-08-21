import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getData, getIsLoading } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { data, isLoading } = this.props

    if(isLoading) return <div className={styles.root}>Загрузка информации...</div>
    if(!data) return <div className={styles.root}>Информация о подписчиках не найдена</div>
    
    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.map(item =>(
          <div className={cx(styles.follower)} key={item.id}>
            <img className={cx(styles.followerImg)} src={item.avatar_url} alt={item.login} />
            <p className={cx(styles.followerLogin)}>{item.login}</p>
          </div>
        ))}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  data: getData(state),
  isLoading: getIsLoading(state)
}))(Followers);
