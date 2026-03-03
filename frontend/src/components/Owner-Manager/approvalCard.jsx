function ApprovalCard({ item, quantity, requestedBy }) {
    const onApprove = async() => {
        console.log('send update request to the backend from manager context to approve the request raised');
    }

    return (
        <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-slate-200 mt-3 mb-3 ml-4 mr-4">
            <div>
                <h4 className="font-bold text-slate-800">{item} <span className="text-sm font-normal text-slate-500">({quantity})</span></h4>
                <p className="text-xs text-slate-500">Requested by: {requestedBy}</p>
            </div>

            <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs font-bold text-red-600 border border-red-200 rounded hover:bg-red-50">Reject</button>
                <button onClick={onApprove} className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded hover:bg-emerald-700 shadow-sm">
                    Approve
                </button>
            </div>
        </div>
    );
};

export default ApprovalCard;