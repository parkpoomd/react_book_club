import React, {useRef, useEffect} from 'react'
import {BG, CloseWrapper, Em, P, Panel} from './styles'
import {Close} from '../../styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel, state}) => {
  const panelEl = useRef(null)
  const prevBook = useRef(null)

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0
    }

    prevBook.current = book
  }, [book, prevBook])

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>

        {book && (
          <>
            <Book book={book} isLarge={true} />
            <P>{book.description}</P>
            <P>
              <Em>Published in {book.published}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel
