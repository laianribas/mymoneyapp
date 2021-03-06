import React from 'react'

const Footer = () => {
  return (
    <footer className="main-footer">
      <strong>
        Copyright &copy; 2021{' '}
        <a
          href="https://github.com/laianribas"
          target="_blank"
          rel="noreferrer"
        >
          Laian Ribas Nascimento
        </a>
        .
      </strong>
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 0.1.0
      </div>
    </footer>
  )
}

export default Footer
