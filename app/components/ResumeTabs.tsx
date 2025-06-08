'use client'

import React from 'react'

export default function ResumeTabs() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 mt-8 px-4 container mx-auto gap-4">
      {/* Tabs */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-full md:w-auto"
        tabIndex={0}
        style={{ outline: 'none' }}
      >
        <button
          type="button"
          role="tab"
          aria-selected="true"
          aria-controls="edit-tab-content"
          data-state="active"
          id="tab-edit"
          className="inline-flex flex-1 md:flex-none items-center justify-center whitespace-nowrap rounded-sm px-3 sm:px-4 py-1.5 text-sm sm:text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          tabIndex={-1}
        >
          Edit Resume
        </button>
        <button
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="preview-tab-content"
          data-state="inactive"
          id="tab-preview"
          className="inline-flex flex-1 md:flex-none items-center justify-center whitespace-nowrap rounded-sm px-3 sm:px-4 py-1.5 text-sm sm:text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          tabIndex={-1}
        >
          Preview
        </button>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm sm:text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 sm:px-6 py-2">
          Reset Data
        </button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-4 sm:px-6 py-2 h-10">
          Download PDF
        </button>
      </div>
    </div>
  )
}
