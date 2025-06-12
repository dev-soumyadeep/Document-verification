import React, { useState } from 'react';


interface Field {
  name: string;
  value: string;
}

interface IssueFormData {
  documentName: string;
  description: string;
  recipientEmail: string;
  document: File | null;
   fields: Field[];
}

const IssueForm: React.FC = () => {
  const [formData, setFormData] = useState<IssueFormData>({
    documentName: '',
    description: '',
    recipientEmail: '',
    document: null,
    fields: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, document: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

    const handleFieldChange = (index: number, key: 'name' | 'value', value: string) => {
    const newFields = [...formData.fields];
    newFields[index] = { ...newFields[index], [key]: value };
    setFormData(prev => ({ ...prev, fields: newFields }));
  };

  // Add this handler to add new fields
  const addField = () => {
    setFormData(prev => ({
      ...prev,
      fields: [...prev.fields, { name: '', value: '' }]
    }));
  };

 return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-8 max-w-3xl mx-auto">
      {/* document Details Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-100 mb-6 border-b border-gray-700 pb-3">
          Document Details
        </h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="documentName" className="block text-sm font-medium text-gray-300 pb-1.5">
              Document Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="documentName"
              name="documentName"
              required
              value={formData.documentName}
              onChange={handleInputChange}
              placeholder="e.g., Diploma, Certificate of Completion"
              className="form-input w-full rounded-lg border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/50 focus:ring-opacity-50 h-12 px-4 text-sm placeholder-gray-400"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 pb-1.5">
              Description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Provide a brief description of the document"
              className="form-textarea w-full rounded-lg border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/50 focus:ring-opacity-50 p-4 text-sm placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 pb-1.5">
              Attach Document <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md bg-gray-700/50">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-300">
                  <label className="relative cursor-pointer rounded-md font-medium text-blue-400 hover:text-blue-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} required accept=".png,.jpg,.pdf"/>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF up to 100MB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section>
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
          <h2 className="text-xl font-semibold text-gray-100">Additional Fields</h2>
          <button
            type="button"
            onClick={addField}
            className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            <span className="material-icons-outlined">add_circle_outline</span>
            Add Field
          </button>
        </div>
        <div className="space-y-4">
          {formData.fields.map((field, index) => (
            <div key={index} className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 pb-1.5">
                  Field Name
                </label>
                <input
                  type="text"
                  value={field.name}
                  onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                  placeholder="e.g., Student ID"
                  className="form-input w-full rounded-lg border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/50 focus:ring-opacity-50 h-12 px-4 text-sm placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 pb-1.5">
                  Field Value
                </label>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                  placeholder="Enter value"
                  className="form-input w-full rounded-lg border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/50 focus:ring-opacity-50 h-12 px-4 text-sm placeholder-gray-400"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipient Information Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-100 mb-6 border-b border-gray-700 pb-3">
          Recipient Information
        </h2>
        <div>
          <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-300 pb-1.5">
            Recipient Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="recipientEmail"
            name="recipientEmail"
            required
            value={formData.recipientEmail}
            onChange={handleInputChange}
            placeholder="Enter recipient's email address"
            className="form-input w-full rounded-lg border-gray-600 bg-gray-700 text-gray-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/50 focus:ring-opacity-50 h-12 px-4 text-sm placeholder-gray-400"
          />
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="flex items-center justify-center rounded-lg h-12 px-8 bg-blue-600 text-white text-sm font-semibold leading-normal tracking-wide shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors duration-150"
        >
          <span className="material-icons-outlined mr-2 text-lg">send</span>
          Issue document
        </button>
      </div>
    </form>
  );
};

export default IssueForm;