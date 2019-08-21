import React, { PureComponent } from 'react';
import { getData, getIsLoading} from '../../modules/User';
import styles from './UserInfo.module.css';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { data, isLoading } = this.props

    if(isLoading) return <div className={styles.root}>Загрузка информации...</div>
    if(!data) return <div className={styles.root}>Информация о пользователе не найдена</div>

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          {data.avatar_url && <img className={styles.image} src={data.avatar_url} alt='user info' />}
        </div>
        <div>
          <p className='t-user-name'>{data.name}</p>
          <p className='t-user-bio'>{data.bio}</p>
        </div>
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  data: getData(state),
  isLoading: getIsLoading(state)
}))(UserInfo);
