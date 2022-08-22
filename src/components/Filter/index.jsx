import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from 'redux/actions/contactsActions';

export default function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={css.filterBox}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          onChange={e => dispatch(filter(e.currentTarget.value))}
          value={value}
          type="text"
        />
      </label>
    </div>
  );
}
