'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { WhiteLogo } from '@/components/svg/logo';
import { DropDownArrowIcons } from '@/components/svg/icons';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth.store';
import { getItem } from '@/utils/storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { ContactSupportDialog } from '@/components/common/contact-support-dialog';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface NavbarProps {

  variant?: 'auto' | 'scroll' | 'blue' | 'light' | 'floating';
  navItems?: NavItem[];
  activeItem?: string;
  onTalkToUsClick?: () => void;
  onSignUpClick?: () => void;
  className?: string;
  /** Scroll position threshold in pixels to trigger morphing (default 20px) */
  scrollThreshold?: number;

}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Plans', href: '/pricing' },

  { label: 'Blogs', href: '/blogs' },
  // { label: 'News', href: '/news' },
  {
    label: 'Tools',
    href: '/tools',
    hasDropdown: true,
    dropdownItems: [
      { label: 'SIP Calculator', href: '/tools/sip-calculator' },
      { label: 'Lumpsum Calculator', href: '/tools/lumpsum-calculator' },
      { label: 'SWP Calculator', href: '/tools/swp-calculator' },
      { label: 'Retirement Planner', href: '/tools/retirement-planner' },
    ],
  },
  { label: 'Careers', href: '/careers' },
];

export const Navbar: React.FC<NavbarProps> = ({
  variant = 'auto',
  navItems = DEFAULT_NAV_ITEMS,
  activeItem,
  onTalkToUsClick,
  onSignUpClick,
  className = '',
  scrollThreshold = 20,
}) => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const getProfile = useAuthStore((state) => state.getProfile);
  const logout = useAuthStore((state) => state.logout);

  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{ [key: string]: boolean }>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [contactSupportOpen, setContactSupportOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const toggleMobileDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Fetch latest user profile data on mount / refresh
  useEffect(() => {
    const hasToken = token || getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (hasToken) {
      getProfile().catch(() => { });
    }
  }, []);

  useEffect(() => {
    if (variant !== 'auto' && variant !== 'scroll') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant, scrollThreshold]);

  // Click outside to close profile dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isFloating =
    variant === 'floating' ||
    variant === 'light' ||
    ((variant === 'auto' || variant === 'scroll') && isScrolled);

  const isItemActive = (item: NavItem) => {
    if (activeItem) {
      return activeItem.toLowerCase() === item.label.toLowerCase();
    }
    if (!pathname) return false;
    if (item.href === '/') {
      return pathname === '/';
    }
    return pathname === item.href || pathname.startsWith(item.href + '/');
  };

  const handleTalkToUs = () => {
    if (onTalkToUsClick) {
      onTalkToUsClick();
    } else {
      setContactSupportOpen(true);
    }
  };

  const handleSignUp = () => {
    if (onSignUpClick) {
      onSignUpClick();
    } else {
      window.location.href = '/login';
    }
  };

  const getDisplayName = () => {
    if (!user) return 'User';
    if (user.firstName) {
      return `${user.firstName} ${user.lastName || ''}`.trim();
    }
    return user.name || user.email?.split('@')[0] || 'User';
  };

  const getInitials = () => {
    if (!user) return 'U';
    if (user.firstName) {
      const f = user.firstName[0] || '';
      const l = user.lastName ? user.lastName[0] : '';
      return (f + l).toUpperCase() || 'U';
    }
    if (user.name) {
      const parts = user.name.trim().split(' ');
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return parts[0][0]?.toUpperCase() || 'U';
    }
    if (user.email) {
      return user.email[0].toUpperCase();
    }
    return 'U';
  };

  const avatarSrc = user?.avatar || user?.image || user?.profileImage || null;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full select-none transition-all duration-300 ease-in-out',
        isFloating ? 'pt-3 px-4 sm:px-6 bg-transparent' : 'pt-0 px-0 bg-transparent',
        className
      )}
    >
      <div
        className={cn(
          'relative mx-auto flex items-center justify-between rounded-full border transition-all duration-300 ease-in-out',
          isFloating
            ? 'max-w-7xl bg-white/30 backdrop-blur-2xl border-white/50 shadow-lg shadow-slate-900/10 px-3 sm:px-3 py-2.5 sm:py-3 h-14 sm:h-16'
            : 'max-w-7xl px-4 sm:px-3 lg:px-3 h-20 border-transparent shadow-none bg-transparent'
        )}
      >
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <a href="/" className="inline-flex items-center hover:opacity-90 transition-opacity">
            <WhiteLogo
              width={isFloating ? 135 : 147}
              height={isFloating ? 38 : 42}
              color={isFloating ? '#1E3160' : 'white'}
            />
          </a>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-2 text-sm font-medium transition-colors duration-300">
          {navItems.map((item) => {
            const isActive = isItemActive(item);

            return (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    'relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-200',
                    isActive
                      ? isFloating
                        ? 'text-sky-600 bg-sky-50 font-semibold'
                        : 'text-white bg-white/20 font-semibold backdrop-blur-md'
                      : isFloating
                        ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 font-medium'
                        : 'text-white/90 hover:text-white hover:bg-white/10 font-medium'
                  )}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <span className={cn('transition-transform duration-200', activeDropdown === item.label ? 'rotate-180' : '')}>
                      <DropDownArrowIcons size={11} color={isFloating ? (isActive ? '#0284c7' : '#0f172a') : 'white'} />
                    </span>
                  )}


                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div
                    className={cn(
                      'absolute left-0 top-full pt-3 w-52 transition-all duration-200',
                      activeDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    )}
                  >
                    <div className="bg-white text-slate-900 rounded-2xl p-2 shadow-2xl border border-slate-100 space-y-1">
                      {item.dropdownItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl hover:bg-sky-50 hover:text-sky-600 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right: Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={handleTalkToUs}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 border cursor-pointer',
              isFloating
                ? 'border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 hover:border-slate-400'
                : 'border-white/80 bg-transparent text-white hover:bg-white/10'
            )}
          >
            Talk to us
          </Button>

          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className={cn(
                  'relative w-8 h-8 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0 flex items-center justify-center font-semibold text-xs sm:text-sm border-[1px] transition-all duration-200 cursor-pointer shadow-md outline-none hover:scale-105 active:scale-95',
                  isFloating
                    ? 'bg-gradient-to-tr from[var(--primary-normal)] via[var(--primary-dark)] to-[var(--blue-normal)] text-white border-white shadow-sky-900/20'
                    : 'bg-white text-sky-600 border-white/90 shadow-lg shadow-black/10'
                )}
                aria-expanded={profileDropdownOpen}
                aria-label="User menu"
              >
                {avatarSrc && !imgError ? (
                  <Image
                    src={avatarSrc}
                    alt={getDisplayName()}
                    fill
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span>{getInitials()}</span>
                )}
              </button>

              {/* Profile Dropdown Popup */}
              {profileDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-60 rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in-50 zoom-in-95 duration-150 select-none">
                  {/* User Info Header */}
                  <div className="px-3 py-2.5 bg-slate-50/80 rounded-xl mb-1 flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gradient-to-tr from-[var(--primary-normal)]  to-[var(--blue-normal)] text-white font-semibold text-xs border border-[var(--blue-normal)]/50 shadow-sm">
                      {avatarSrc && !imgError ? (
                        <Image
                          src={avatarSrc}
                          alt={getDisplayName()}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span>{getInitials()}</span>
                      )}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-semibold text-slate-900 truncate">
                        {getDisplayName()}
                      </p>
                      {user.email && (
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="h-px bg-slate-100 my-1" />

                  {/* Options */}
                  <div className="space-y-0.5">
                    <a
                      href="/profile"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs sm:text-sm font-medium rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                    >
                      <User className="w-4 h-4 stroke-[2]" />
                      <span>My Profile</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        logout();
                        window.location.href = '/';
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs sm:text-sm font-medium rounded-xl  transition-colors cursor-pointer text-left"
                    >
                      <LogOut className="w-4 h-4 stroke-[2]" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              onClick={handleSignUp}
              className={cn(
                'shadow-md rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 border border-transparent cursor-pointer',
                isFloating
                  ? 'bg-[var(--blue-normal)] text-white hover:bg-[var(--blue-normal-hover)]'
                  : 'bg-white text-slate-900 hover:bg-white/90'
              )}
            >
              Sign up
            </Button>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              'p-2 rounded-full transition-colors',
              isFloating
                ? 'text-slate-900 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className={cn(
            'md:hidden mt-2 max-w-7xl mx-auto rounded-3xl border shadow-xl px-6 py-6 space-y-5 animate-in slide-in-from-top-3 duration-200 transition-colors',
            isFloating
              ? 'bg-white/40 backdrop-blur-2xl border-white/50 text-slate-900 shadow-xl'
              : 'bg-[var(--blue-normal)] border-white/15 text-white'
          )}
        >
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = isItemActive(item);
              const isSubOpen = Boolean(mobileDropdownOpen[item.label]);

              return (
                <li key={item.label}>
                  {item.hasDropdown && item.dropdownItems ? (
                    <>
                      <div
                        className={cn(
                          'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors cursor-pointer select-none',
                          isActive
                            ? isFloating
                              ? 'text-sky-600 bg-sky-50 font-semibold'
                              : 'text-white bg-white/20 font-semibold'
                            : isFloating
                              ? 'text-slate-900 hover:text-[var(--blue-normal)]'
                              : 'text-white hover:text-white/80'
                        )}
                        onClick={(e) => toggleMobileDropdown(item.label, e)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform duration-200',
                            isSubOpen ? 'rotate-180' : 'rotate-0'
                          )}
                        />
                      </div>

                      {isSubOpen && (
                        <div
                          className={cn(
                            'pl-4 mt-2 mb-2 space-y-2 border-l-2',
                            isFloating ? 'border-slate-200' : 'border-white/20'
                          )}
                        >
                          {item.dropdownItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className={cn(
                                'block text-sm py-1 transition-colors',
                                isFloating
                                  ? 'text-slate-600 hover:text-slate-900'
                                  : 'text-white/90 hover:text-white'
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors',
                        isActive
                          ? isFloating
                            ? 'text-sky-600 bg-sky-50 font-semibold'
                            : 'text-white bg-white/20 font-semibold'
                          : isFloating
                            ? 'text-slate-900 hover:text-[var(--blue-normal)]'
                            : 'text-white hover:text-white/80'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div
            className={cn(
              'pt-4 border-t flex flex-col gap-3',
              isFloating ? 'border-slate-200' : 'border-white/15'
            )}
          >
            {user ? (
              <div className="space-y-3">
                <div className={cn(
                  'flex items-center gap-3 p-3 rounded-2xl border',
                  isFloating
                    ? 'bg-slate-50 border-slate-200 text-slate-900'
                    : 'bg-white/10 border-white/20 text-white'
                )}>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gradient-to-tr from-sky-500 to-blue-600 text-white font-semibold text-sm border border-white/60">
                    {avatarSrc && !imgError ? (
                      <Image
                        src={avatarSrc}
                        alt={getDisplayName()}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span>{getInitials()}</span>
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold truncate">{getDisplayName()}</p>
                    {user.email && (
                      <p className="text-xs opacity-80 truncate">{user.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium border transition-colors',
                      isFloating
                        ? 'border-slate-300 text-slate-900 hover:bg-slate-100'
                        : 'border-white/80 text-white hover:bg-white/10'
                    )}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logout();
                      window.location.href = '/';
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium  text-black border-1 border-gray-300 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>

                <Button
                  onClick={() => {
                    handleTalkToUs();
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'w-full rounded-full justify-center py-2.5 border transition-colors cursor-pointer',
                    isFloating
                      ? 'border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100'
                      : 'border-white bg-transparent text-white hover:bg-white/10'
                  )}
                >
                  Talk to us
                </Button>
              </div>
            ) : (
              <>
                <Button
                  onClick={() => {
                    handleTalkToUs();
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'w-full rounded-full justify-center py-2.5 border transition-colors cursor-pointer',
                    isFloating
                      ? 'border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100'
                      : 'border-white bg-transparent text-white hover:bg-white/10'
                  )}
                >
                  Talk to us
                </Button>

                <Button
                  onClick={() => {
                    handleSignUp();
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'w-full rounded-full justify-center py-2.5 transition-colors border border-transparent cursor-pointer',
                    isFloating
                      ? 'bg-[var(--blue-normal)] text-white hover:bg-[var(--blue-normal-hover)]'
                      : 'bg-white text-slate-900 hover:bg-white/90'
                  )}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      )}
      <ContactSupportDialog open={contactSupportOpen} onOpenChange={setContactSupportOpen} />
    </header>
  );
};

export default Navbar;

