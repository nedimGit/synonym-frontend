import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import debounce from 'lodash/debounce';
import '../styles/synonyms.scss';
import { getAllWords, getSynonymsForWord, addWord, addSynonym, searchWords, editWord, deleteWord } from '../actions/synonym-actions';
import WordInputForm from './input-form';
import EditInputForm from './edit-input-form';
import SynonymInputForm from './synonym-input-form';
import WordSearchForm from './search-form';
import SingleItem from './single-item';
import Button from '../../../common/form/components/button';

class Synonym extends Component {
  constructor(props) {
    super(props);
    this.formChangeDebounce = debounce(this.submitForm, 100);
    this.state = {
      words: [],
      synonyms: [],
      selectedItem: '',
    };
  }

  componentWillUnmount() {
    this.formChangeDebounce.cancel();
  }
  componentDidMount() {
    const { getAllWords } = this.props;
    getAllWords();
  }

  submitForm = values => {
    const { searchWords } = this.props;
    searchWords(values);
  };

  submitWordForm = values => {
    const { addWord } = this.props;
    addWord(values);
  };

  submitSynonymForm = values => {
    const { addSynonym } = this.props;
    let tempValues = {};
    tempValues.Synonym = { Word: values.Word };
    tempValues.Word = this.selectedItem;

    addSynonym(tempValues);
  };

  submitEditForm = values => {
    const { editWord } = this.props;
    let tempValues = {};
    tempValues.UpdatedWord = { Word: values.Word };
    tempValues.Word = this.selectedItem;

    editWord(tempValues);
  };

  handleItemClick(e, component) {
    const { getSynonymsForWord } = this.props;
    this.selectedItem = component;
    getSynonymsForWord(component);
  }

  deleteWord = values => {
    const { deleteWord } = this.props;
    deleteWord(this.selectedItem);
  };

  handleChange = values => {
    this.formChangeDebounce(values);
  };

  render() {
    const { words, synonyms } = this.props;
    return (
      <div>
        <WordSearchForm onChange={this.handleChange} onSubmit={this.submitForm} />
        <div className="list-container">
          <div>
            <div>
              <p title="Words">Words</p>

              <div className="word-list">
                {map(words, (word, index) => {
                  return <SingleItem key={index} item={word} onItemClick={(e, component) => this.handleItemClick(e, component)} selectedItem={this.selectedItem} index={index} />;
                })}
              </div>
            </div>
            <div className="form-container">
              <div>
                <WordInputForm onSubmit={this.submitWordForm} />
              </div>
            </div>
            <div>
              <EditInputForm selectedWord={this.selectedItem} onSubmit={this.submitEditForm} />

              <Button onClick={this.selectedItem ? this.deleteWord : null} className="btn-green btn-cube btn-small" text="Delete" />
            </div>
          </div>
          <div>
            <div>
              <p title="Synonyms (select word to view synonyms)">Synonyms</p>
              <div className="word-list">
                {map(synonyms, (synonym, index) => {
                  return <p key={index}>{synonym.Word}</p>;
                })}
              </div>
            </div>

            <div>
              <SynonymInputForm onSubmit={this.submitSynonymForm} />
            </div>
          </div>
        </div>
        <p>- Add new word , select it so you can add new synonym for it</p>
        <p>- When new synonym is added it will appier in Words section as well</p>
        <p>- You can search all words</p>
        <p>- Select word to edit or delete it</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  synonymReducer: state.synonymReducer,
  words: state.synonymReducer.words,
  synonyms: state.synonymReducer.synonyms,
});

const mapDispatchToProps = dispatch => ({
  getAllWords: () => dispatch(getAllWords()),
  getSynonymsForWord: data => dispatch(getSynonymsForWord(data)),
  addWord: data => dispatch(addWord(data)),
  searchWords: data => dispatch(searchWords(data)),
  addSynonym: data => dispatch(addSynonym(data)),
  editWord: data => dispatch(editWord(data)),
  deleteWord: data => dispatch(deleteWord(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Synonym);
