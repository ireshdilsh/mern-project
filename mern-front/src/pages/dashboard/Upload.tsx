import { useState } from 'react'

export default function Upload() {
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles([...files, ...newFiles])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles([...files, ...newFiles])
    }
  }

  const handleUpload = () => {
    setIsUploading(true)
    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setIsUploading(false)
          setFiles([])
          setUploadProgress(0)
        }, 500)
      }
    }, 300)
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <div className='min-h-screen bg-neutral-50'>
      <div className='max-w-5xl mx-auto px-6 py-12'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-neutral-900 mb-3'>Upload Memories</h1>
          <p className='text-neutral-600'>Share your precious moments with your family</p>
        </div>

        {/* Upload Area */}
        <div className='bg-white rounded-2xl shadow-sm p-8 mb-6'>
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
              dragActive
                ? 'border-purple-500 bg-purple-50'
                : 'border-neutral-300 hover:border-purple-400 hover:bg-neutral-50'
            }`}
          >
            <input
              type='file'
              multiple
              accept='image/*,video/*'
              onChange={handleFileSelect}
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
            />
            <div className='flex flex-col items-center space-y-4'>
              <div className='bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-full'>
                <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-neutral-900 mb-2'>
                  Drop your files here, or browse
                </h3>
                <p className='text-neutral-600'>Supports: JPG, PNG, GIF, MP4, MOV (Max 100MB per file)</p>
              </div>
              <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all'>
                Choose Files
              </button>
            </div>
          </div>

          {/* AI Features Toggle */}
          <div className='mt-6 p-4 bg-purple-50 rounded-xl'>
            <h4 className='font-semibold text-neutral-900 mb-3'>AI Processing Options</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <label className='flex items-center space-x-3 cursor-pointer'>
                <input type='checkbox' defaultChecked className='w-5 h-5 text-purple-600 rounded' />
                <div>
                  <div className='font-medium text-neutral-900'>Auto-organize</div>
                  <div className='text-sm text-neutral-600'>Detect events & create albums</div>
                </div>
              </label>
              <label className='flex items-center space-x-3 cursor-pointer'>
                <input type='checkbox' defaultChecked className='w-5 h-5 text-purple-600 rounded' />
                <div>
                  <div className='font-medium text-neutral-900'>Face detection</div>
                  <div className='text-sm text-neutral-600'>Identify family members</div>
                </div>
              </label>
              <label className='flex items-center space-x-3 cursor-pointer'>
                <input type='checkbox' defaultChecked className='w-5 h-5 text-purple-600 rounded' />
                <div>
                  <div className='font-medium text-neutral-900'>AI descriptions</div>
                  <div className='text-sm text-neutral-600'>Generate captions</div>
                </div>
              </label>
              <label className='flex items-center space-x-3 cursor-pointer'>
                <input type='checkbox' className='w-5 h-5 text-purple-600 rounded' />
                <div>
                  <div className='font-medium text-neutral-900'>Image enhancement</div>
                  <div className='text-sm text-neutral-600'>Improve quality</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Selected Files */}
        {files.length > 0 && (
          <div className='bg-white rounded-2xl shadow-sm p-6'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-lg font-semibold text-neutral-900'>
                Selected Files ({files.length})
              </h3>
              <button
                onClick={() => setFiles([])}
                className='text-red-600 hover:text-red-700 text-sm font-medium'
              >
                Clear All
              </button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
              {files.map((file, index) => (
                <div key={index} className='relative group'>
                  <div className='aspect-square bg-neutral-100 rounded-lg overflow-hidden'>
                    {file.type.startsWith('image/') ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className='w-full h-full object-cover'
                      />
                    ) : (
                      <div className='w-full h-full flex items-center justify-center'>
                        <svg className='w-12 h-12 text-neutral-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                        </svg>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                  <p className='text-xs text-neutral-600 mt-2 truncate'>{file.name}</p>
                  <p className='text-xs text-neutral-500'>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              ))}
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className='mb-6'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-medium text-neutral-700'>Uploading...</span>
                  <span className='text-sm font-medium text-purple-600'>{uploadProgress}%</span>
                </div>
                <div className='w-full bg-neutral-200 rounded-full h-2 overflow-hidden'>
                  <div
                    className='bg-gradient-to-r from-purple-600 to-pink-500 h-full transition-all duration-300'
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={isUploading}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isUploading ? 'Uploading...' : `Upload ${files.length} File${files.length > 1 ? 's' : ''}`}
            </button>
          </div>
        )}

        {/* Tips */}
        <div className='bg-blue-50 rounded-2xl p-6 mt-6'>
          <h4 className='font-semibold text-blue-900 mb-3 flex items-center'>
            <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            Upload Tips
          </h4>
          <ul className='space-y-2 text-sm text-blue-800'>
            <li className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>Upload high-quality photos for better AI analysis and enhancement</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>Include dates in filenames for automatic timeline organization</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>Group related photos for AI to create better stories and albums</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>Videos will be analyzed for key moments and highlights</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
