'use client'

import {
  LogOutIcon,
  ShieldUserIcon,
  ShoppingBasketIcon,
  UserIcon
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../theme/themeToggle'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Skeleton } from '../ui/skeleton'

const Header = () => {
  return (
    <header className='sticky top-0 left-0 border-b'>
      <div className='container mx-auto py-2 flex items-center justify-between'>
        <div className='flex items-center gap-2.5'>
          <Image
            src='/coffeecoins_logo.svg'
            alt='Logo'
            width={48}
            height={48}
          />
          <span className='text-base uppercase tracking-wide'>Coffeecoins</span>
        </div>
        <nav></nav>
        <div className='flex items-center gap-4'>
          <Link href={'/shop'}>
            <Button
              variant={'outline'}
              size={'icon'}
              className='cursor-pointer'
            >
              <ShoppingBasketIcon />
            </Button>
          </Link>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className='size-16 rounded-full hover:cursor-pointer'>
                <AvatarImage
                  src={'https://github.com/Noxx5.png'}
                  alt='avatar'
                />
                <AvatarFallback>
                  <Skeleton className='size-full rounded-full' />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <UserIcon className='size-4' />
                <span>User</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShieldUserIcon className='size-4' />
                <span>Admin</span>
              </DropdownMenuItem>
              <DropdownMenuItem className='hover:cursor-pointer'>
                <LogOutIcon className='size-4' />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
