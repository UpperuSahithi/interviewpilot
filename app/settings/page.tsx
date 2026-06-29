'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Bell, Lock, Trash2, Download, Settings, Sparkles } from 'lucide-react';
import { Input, Textarea } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { Alert } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { PageAtmosphere } from '@/components/premium/page-atmosphere';
import { GlassCard } from '@/components/premium/glass-card';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User, description: 'Personal information' },
  { id: 'security', label: 'Security', icon: Shield, description: 'Password & account' },
  { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Alerts & emails' },
  { id: 'privacy', label: 'Privacy', icon: Lock, description: 'Data & visibility' },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    privateProfile: false,
    theme: 'light',
  });

  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Software engineer passionate about building great products',
    location: 'San Francisco, CA',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [activeTab, setActiveTab] = useState('profile');

  const handleSettingChange = (key: string, value: boolean | string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleProfileChange = (key: string, value: string) => {
    setProfileData(prev => ({ ...prev, [key]: value }));
  };

  const handlePasswordChange = (key: string, value: string) => {
    setPasswordData(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveProfile = () => {
    console.log('Profile saved:', profileData);
    alert('Profile updated successfully!');
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password changed');
    alert('Password changed successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-8">
      <PageAtmosphere />

      <div className="relative max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-4 md:pt-8"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Account</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Settings &{' '}
              <span className="brand-gradient-text">Preferences</span>
            </h1>
            <p className="text-base text-muted leading-relaxed max-w-lg">
              Manage your account, security, notifications, and privacy settings in one place.
            </p>
          </div>

          <GlassCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient shrink-0">
                <Settings className="w-7 h-7 text-white" aria-hidden />
              </div>
              <div>
                <p className="font-semibold text-foreground">John Doe</p>
                <p className="text-sm text-muted">john@example.com</p>
                <p className="text-xs text-primary mt-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" aria-hidden />
                  Pro Plan
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Layout: sidebar tabs + content */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tab navigation */}
          <div className="lg:col-span-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'w-full flex items-center gap-3 p-4 rounded-2xl text-left transition-all focus-ring',
                    isActive
                      ? 'brand-gradient text-white shadow-md'
                      : 'bg-card/50 border border-border/60 hover:border-border-subtle hover:bg-muted-light/30'
                  )}
                >
                  <div className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-xl shrink-0',
                    isActive ? 'bg-white/20' : 'bg-primary-light'
                  )}>
                    <Icon className={cn('w-5 h-5', isActive ? 'text-white' : 'text-primary')} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className={cn('font-medium text-sm', isActive ? 'text-white' : 'text-foreground')}>{tab.label}</p>
                    <p className={cn('text-xs truncate', isActive ? 'text-white/70' : 'text-muted')}>{tab.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
              >
                <GlassCard className="p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-foreground mb-6">{activeTabData?.label} Settings</h2>

                  {activeTab === 'profile' && (
                    <div className="space-y-4">
                      <Input label="Full Name" type="text" value={profileData.fullName} onChange={(e) => handleProfileChange('fullName', e.target.value)} />
                      <Input label="Email Address" type="email" value={profileData.email} onChange={(e) => handleProfileChange('email', e.target.value)} />
                      <Input label="Phone Number" type="tel" value={profileData.phone} onChange={(e) => handleProfileChange('phone', e.target.value)} />
                      <Input label="Location" type="text" value={profileData.location} onChange={(e) => handleProfileChange('location', e.target.value)} />
                      <Textarea label="Bio" value={profileData.bio} onChange={(e) => handleProfileChange('bio', e.target.value)} rows={4} />
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                        <Button type="button" onClick={handleSaveProfile}>Save Changes</Button>
                        <Button type="button" variant="outline">Cancel</Button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'security' && (
                    <div className="space-y-6">
                      <Alert variant="warning">
                        <strong>Last login:</strong> Today at 2:30 PM from Chrome on macOS
                      </Alert>
                      <div className="space-y-4">
                        <Input label="Current Password" type="password" value={passwordData.currentPassword} onChange={(e) => handlePasswordChange('currentPassword', e.target.value)} />
                        <Input label="New Password" type="password" value={passwordData.newPassword} onChange={(e) => handlePasswordChange('newPassword', e.target.value)} />
                        <Input label="Confirm New Password" type="password" value={passwordData.confirmPassword} onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)} />
                        <Button type="button" onClick={handleChangePassword}>Update Password</Button>
                      </div>
                      <div className="pt-6 border-t border-danger/20">
                        <h3 className="text-danger font-semibold flex items-center gap-2 mb-2">
                          <Trash2 className="w-4 h-4" aria-hidden />
                          Danger Zone
                        </h3>
                        <p className="text-sm text-muted mb-4">Once you delete your account, there is no going back.</p>
                        <Button type="button" variant="danger">Delete Account</Button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'notifications' && (
                    <div className="space-y-3">
                      <Toggle checked={settings.notifications} onChange={(v) => handleSettingChange('notifications', v)} label="Interview Reminders" description="Get notified when it's time for your scheduled interviews" />
                      <Toggle checked={settings.emailUpdates} onChange={(v) => handleSettingChange('emailUpdates', v)} label="Email Updates" description="Receive weekly digest of your progress and recommendations" />
                      <Alert variant="info" className="mt-4">Notification preferences saved automatically</Alert>
                    </div>
                  )}

                  {activeTab === 'privacy' && (
                    <div className="space-y-6">
                      <Toggle checked={settings.privateProfile} onChange={(v) => handleSettingChange('privateProfile', v)} label="Private Profile" description="Hide your profile from other users on the platform" />
                      <div className="rounded-2xl bg-muted-light/40 border border-border/40 p-5">
                        <h3 className="font-medium text-foreground mb-3">Data & Privacy</h3>
                        <ul className="space-y-2.5 text-sm text-muted">
                          {['We encrypt all your personal data', 'Your interview data is never shared with third parties', 'You can download your data anytime'].map((item) => (
                            <li key={item} className="flex gap-2 items-start">
                              <span className="text-success shrink-0">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button type="button" variant="secondary" icon={<Download className="w-4 h-4" />}>Download Your Data</Button>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
}
