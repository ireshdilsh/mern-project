import { useState } from 'react'

export default function FamilyGroups() {
  const [showInviteModal, setShowInviteModal] = useState(false)

  const familyMembers = [
    { id: 1, name: 'Sarah Johnson', role: 'Admin', avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=9333ea&color=fff', email: 'sarah@email.com', joined: 'Jan 2025', photosCount: 847 },
    { id: 2, name: 'Mike Johnson', role: 'Member', avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=3b82f6&color=fff', email: 'mike@email.com', joined: 'Jan 2025', photosCount: 623 },
    { id: 3, name: 'Emma Johnson', role: 'Member', avatar: 'https://ui-avatars.com/api/?name=Emma+Johnson&background=ec4899&color=fff', email: 'emma@email.com', joined: 'Feb 2025', photosCount: 412 },
    { id: 4, name: 'Lucas Johnson', role: 'Member', avatar: 'https://ui-avatars.com/api/?name=Lucas+Johnson&background=10b981&color=fff', email: 'lucas@email.com', joined: 'Feb 2025', photosCount: 198 },
  ]

  const pendingInvites = [
    { id: 1, email: 'grandma@email.com', sentBy: 'Sarah Johnson', sentDate: '2 days ago' },
    { id: 2, email: 'uncle.john@email.com', sentBy: 'Mike Johnson', sentDate: '5 days ago' },
  ]

  const sharedAlbums = [
    { id: 1, title: 'Summer 2025', owner: 'Sarah Johnson', members: 4, photos: 247, coverImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400' },
    { id: 2, title: 'Family Birthdays', owner: 'Mike Johnson', members: 4, photos: 156, coverImage: 'https://images.unsplash.com/photo-1533854775446-95c4609da544?w=400' },
    { id: 3, title: 'Holiday 2024', owner: 'Emma Johnson', members: 3, photos: 89, coverImage: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400' },
  ]

  return (
    <div className='min-h-screen bg-neutral-50'>
      {/* Header */}
      <header className='bg-white border-b border-neutral-200'>
        <div className='max-w-7xl mx-auto px-6 py-6'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-3xl font-bold text-neutral-900'>Johnson Family Group</h1>
              <p className='text-neutral-600 mt-1'>Manage members and shared memories</p>
            </div>
            <button
              onClick={() => setShowInviteModal(true)}
              className='flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-medium'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
              </svg>
              <span>Invite Member</span>
            </button>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-6 py-8'>
        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white rounded-2xl p-6 shadow-sm'>
            <div className='flex items-center space-x-3'>
              <div className='bg-purple-100 p-3 rounded-xl'>
                <svg className='w-6 h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
              </div>
              <div>
                <p className='text-sm text-neutral-600 font-medium'>Total Members</p>
                <p className='text-2xl font-bold text-neutral-900'>{familyMembers.length}</p>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-sm'>
            <div className='flex items-center space-x-3'>
              <div className='bg-blue-100 p-3 rounded-xl'>
                <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
              </div>
              <div>
                <p className='text-sm text-neutral-600 font-medium'>Shared Photos</p>
                <p className='text-2xl font-bold text-neutral-900'>2,847</p>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-sm'>
            <div className='flex items-center space-x-3'>
              <div className='bg-green-100 p-3 rounded-xl'>
                <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                </svg>
              </div>
              <div>
                <p className='text-sm text-neutral-600 font-medium'>Shared Albums</p>
                <p className='text-2xl font-bold text-neutral-900'>{sharedAlbums.length}</p>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-sm'>
            <div className='flex items-center space-x-3'>
              <div className='bg-orange-100 p-3 rounded-xl'>
                <svg className='w-6 h-6 text-orange-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
              <div>
                <p className='text-sm text-neutral-600 font-medium'>Pending Invites</p>
                <p className='text-2xl font-bold text-neutral-900'>{pendingInvites.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Family Members List */}
          <div className='lg:col-span-2 bg-white rounded-2xl shadow-sm p-6'>
            <h2 className='text-xl font-bold text-neutral-900 mb-6'>Family Members</h2>
            <div className='space-y-4'>
              {familyMembers.map(member => (
                <div key={member.id} className='flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 transition-colors'>
                  <div className='flex items-center space-x-4'>
                    <img src={member.avatar} alt={member.name} className='w-14 h-14 rounded-full' />
                    <div>
                      <div className='flex items-center space-x-2'>
                        <h3 className='font-semibold text-neutral-900'>{member.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          member.role === 'Admin' ? 'bg-purple-100 text-purple-600' : 'bg-neutral-100 text-neutral-600'
                        }`}>
                          {member.role}
                        </span>
                      </div>
                      <p className='text-sm text-neutral-600'>{member.email}</p>
                      <div className='flex items-center space-x-4 mt-1 text-xs text-neutral-500'>
                        <span>Joined {member.joined}</span>
                        <span>• {member.photosCount} photos</span>
                      </div>
                    </div>
                  </div>
                  <button className='text-neutral-400 hover:text-neutral-600'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z' />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Pending Invites */}
            <div className='bg-white rounded-2xl shadow-sm p-6'>
              <h3 className='font-semibold text-neutral-900 mb-4'>Pending Invites</h3>
              <div className='space-y-3'>
                {pendingInvites.map(invite => (
                  <div key={invite.id} className='p-3 bg-orange-50 rounded-lg'>
                    <p className='font-medium text-neutral-900 text-sm'>{invite.email}</p>
                    <p className='text-xs text-neutral-600 mt-1'>Sent by {invite.sentBy}</p>
                    <p className='text-xs text-neutral-500'>{invite.sentDate}</p>
                    <button className='mt-2 text-xs text-red-600 hover:text-red-700 font-medium'>
                      Cancel Invite
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Group Settings */}
            <div className='bg-white rounded-2xl shadow-sm p-6'>
              <h3 className='font-semibold text-neutral-900 mb-4'>Group Settings</h3>
              <div className='space-y-3'>
                <button className='w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors text-left'>
                  <svg className='w-5 h-5 text-neutral-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                  </svg>
                  <span className='text-sm text-neutral-700 font-medium'>Edit Group Name</span>
                </button>
                <button className='w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors text-left'>
                  <svg className='w-5 h-5 text-neutral-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  <span className='text-sm text-neutral-700 font-medium'>Privacy Settings</span>
                </button>
                <button className='w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors text-left'>
                  <svg className='w-5 h-5 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                  </svg>
                  <span className='text-sm text-red-600 font-medium'>Leave Group</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Shared Albums */}
        <div className='bg-white rounded-2xl shadow-sm p-6 mt-8'>
          <h2 className='text-xl font-bold text-neutral-900 mb-6'>Shared Albums</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {sharedAlbums.map(album => (
              <div key={album.id} className='group cursor-pointer'>
                <div className='relative h-48 rounded-xl overflow-hidden mb-4'>
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                  <div className='absolute bottom-4 left-4 right-4 text-white'>
                    <h3 className='font-bold text-lg'>{album.title}</h3>
                    <p className='text-sm text-white/80'>{album.photos} photos</p>
                  </div>
                </div>
                <div className='flex items-center justify-between text-sm text-neutral-600'>
                  <span>Owner: {album.owner}</span>
                  <div className='flex items-center space-x-1'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                    <span>{album.members} members</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-2xl p-8 max-w-md w-full'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-2xl font-bold text-neutral-900'>Invite Family Member</h3>
              <button onClick={() => setShowInviteModal(false)} className='text-neutral-400 hover:text-neutral-600'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-neutral-700 mb-2'>Email Address</label>
                <input
                  type='email'
                  placeholder='family@email.com'
                  className='w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-neutral-700 mb-2'>Personal Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder='Join our family group to share memories...'
                  className='w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all'
              >
                Send Invitation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
