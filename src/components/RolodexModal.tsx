import React from 'react';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';

interface RolodexModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const contacts = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Lead Developer',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'UX Designer',
    email: 'jane.smith@example.com',
    phone: '098-765-4321'
  },
  {
    id: 3,
    name: 'Peter Jones',
    title: 'Project Manager',
    email: 'peter.jones@example.com',
    phone: '555-123-4567'
  }
];

export const RolodexModal: React.FC<RolodexModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-[90vw] h-auto p-0 border-none shadow-2xl rounded-[12px] overflow-hidden">
        <div className="flex flex-col h-full bg-[#f7f7f7]">
          {/* Top Bar */}
          <div className="flex items-center h-[44px] px-[20px] bg-[#f7f7f7] border-b border-[#d9d9d9] flex-shrink-0">
            <div className="flex items-center gap-[8px]">
              <button
                className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors"
                onClick={onClose}
              />
              <button className="w-[12px] h-[12px] rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] transition-colors" />
              <button className="w-[12px] h-[12px] rounded-full bg-[#28ca42] hover:bg-[#28cd41] transition-colors" />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-[13px] font-[590] text-[#000000] select-none tracking-[-0.08px]">
                Contacts
              </span>
            </div>
          </div>
          {/* Main Content Area: Contacts List */}
          <div className="flex flex-col flex-1 p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">My Contacts</h2>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800">{contact.name}</h3>
                  <p className="text-sm text-gray-600">{contact.title}</p>
                  <p className="mt-2 text-sm text-blue-600 hover:underline cursor-pointer">{contact.email}</p>
                  <p className="text-sm text-gray-500">{contact.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
