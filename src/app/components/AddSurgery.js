"use client";

import React, { useState } from 'react';
import './AddSurgery.css';

const AddSurgery = () => {
    const [formData, setFormData] = useState({
        type: '',
        craniotomy: '',
        tumorSite: '',
        date: '',
        location: '',
        surgeon: '',
        notes: '',
        otherConditions: []
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setFormData((bkvFormData) => {
            if (checked) {
                return {
                    ...bkvFormData,
                    otherConditions: [...bkvFormData.otherConditions, value]
                };
            } else {
                return {
                    ...bkvFormData,
                    otherConditions: bkvFormData.otherConditions.filter((condition) => condition !== value)
                };
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container">
                <div className="left-sidebar">
                    <h1 className="sidebar-title">Add: Surgery</h1>
                    <h2 className="sidebar-subtitle">All your data is PRIVATE and safe with us!</h2>
                </div>
                <div className="form-content-left">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <h2>
                            <label className="required-title">Type<span className="text-red-500">*</span></label>
                            </h2>
                            <div className="radio-group">
                                <label>
                                    <input type="radio" name="type" value="Craniotomy" onChange={handleChange} />
                                    <span className='form-color'>Craniotomy</span>
                                </label>
                                <label>
                                    <input type="radio" name="type" value="Radio Surgery" onChange={handleChange} />
                                    <span className='form-color'>Radio Surgery</span>
                                </label>
                                <label>
                                    <input type="radio" name="type" value="Other:" onChange={handleChange} />
                                    <span className='form-color'>Other:</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <h2><font color= "#4754c5">Craniotomy</font></h2>
                            <div className="radio-group">
                                {[
                                    "Endonasal",
                                    "Front",
                                    "Other:"
                                ].map((type) => (
                                    <label key={type}>
                                        <input type="radio" name="craniotomy" value={type} onChange={handleChange} />
                                        <span className='form-color'>{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <h2>
                            <label className="required-title">Tumor Site<span className="text-red-500">*</span></label>
                            </h2>
                            <div className="radio-group">
                                {[
                                    "Skull Base",
                                    "Front",
                                    "Other:"
                                ].map((site) => (
                                    <label key={site}>
                                        <input type="radio" name="tumorSite" value={site} onChange={handleChange} />
                                        <span className='form-color'>{site}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="form-content-right">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-text">
                            <div className="placeholder-heading">
                                <label className="required-title">Date<span className="text-red-500">*</span></label>
                            </div>
                            <bk className="gap"></bk>
                            <input
                                type="text"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                placeholder="Enter Date"
                                className="placeholder-input"
                            />
                        </div>
                        <div className="form-group-text">
                            <div className="placeholder-heading">Location</div>
                            <bk className="gap"></bk>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Enter Location"
                                className="placeholder-input"
                            />
                        </div>
                        <div className="form-group-text">
                            <div className="placeholder-heading">Surgeon</div>
                            <bk className="gap"></bk>
                            <input
                                type="text"
                                name="surgeon"
                                value={formData.surgeon}
                                onChange={handleChange}
                                placeholder="Enter Surgeon Name"
                                className="placeholder-input"
                            />
                        </div>
                        <div className="form-group-text">
                            <div className="placeholder-heading">Notes</div>
                            <bk className="gap"></bk>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Enter Notes"
                                className="placeholder-input-last"
                            />
                        </div>
                    </form>
                </div>
            <div className="button-div">
                <button type="submit"><em>Next</em></button>
            </div>
        </div>
    );
};

export default AddSurgery;
