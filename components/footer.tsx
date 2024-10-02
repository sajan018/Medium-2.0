import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='border-t py-4'>
      <div className='container flex max-w-none flex-col items-center justify-between gap-x-3 gap-y-1 text-center text-xs text-muted-foreground sm:flex-row'>
        <p>Medium 2.0 &copy;{new Date().getFullYear()}. All rights reserved.</p>
        <p className='text-xs'>
          Developed by{' '}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary transition-colors hover:text-accent-foreground'
            href='https://www.instagram.com/sa_102515_/'
          >
            Sajan.
          </Link>
        </p>
      </div>
    </footer>
  )
}
