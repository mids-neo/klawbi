import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Card from '../components/common/Card'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import Toggle from '../components/common/Toggle'
import Modal from '../components/common/Modal'

export default function SettingsPage() {
  const { user, updateUser, logout } = useAuth()
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [weeklySummary, setWeeklySummary] = useState(true)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSaveProfile = (e) => {
    e.preventDefault()
    updateUser({ name, email })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleDeleteAccount = () => {
    localStorage.clear()
    logout()
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-text-secondary text-sm mt-1">Manage your account and preferences.</p>
      </div>

      <Card>
        <h2 className="text-lg font-semibold mb-6">Profile</h2>
        <form onSubmit={handleSaveProfile} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Current Password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
            />
            <Input
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" variant="primary">Save Changes</Button>
            {saved && <span className="text-accent text-sm">Saved!</span>}
          </div>
        </form>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold mb-6">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Email Notifications</p>
              <p className="text-text-muted text-xs mt-0.5">Receive email alerts for important events</p>
            </div>
            <Toggle enabled={emailNotifs} onChange={() => setEmailNotifs(!emailNotifs)} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Weekly Summary</p>
              <p className="text-text-muted text-xs mt-0.5">Get a weekly digest of your Klawbi activity</p>
            </div>
            <Toggle enabled={weeklySummary} onChange={() => setWeeklySummary(!weeklySummary)} />
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-error mb-2">Danger Zone</h2>
        <p className="text-text-muted text-sm mb-4">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <Button variant="ghost" className="text-error hover:bg-error/10 hover:text-error border border-error/30" onClick={() => setShowDeleteModal(true)}>
          Delete Account
        </Button>
      </Card>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Account"
      >
        <p className="text-text-secondary text-sm mb-6">
          Are you sure you want to delete your account? All your data, settings, and history will be permanently removed. This cannot be undone.
        </p>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button variant="primary" className="bg-error hover:bg-error/80" onClick={handleDeleteAccount}>
            Yes, Delete Account
          </Button>
        </div>
      </Modal>
    </div>
  )
}
